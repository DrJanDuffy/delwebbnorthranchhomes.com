'use client';
// Enhanced FAQ Accordion Component with search, filter, and expand/collapse all

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqData, getAllCategories } from '@/lib/faqData';

type FAQAccordionProps = {
  showSearch?: boolean;
  showExpandAll?: boolean;
  allowMultiple?: boolean;
  className?: string;
};

export default function FAQAccordion({
  showSearch = true,
  showExpandAll = true,
  allowMultiple = true,
  className = '',
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = getAllCategories();

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((cat) => cat.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
        ),
      })).filter((category) => category.questions.length > 0);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(key);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allKeys = new Set<string>();
    filteredFAQs.forEach((category, catIndex) => {
      category.questions.forEach((_, qIndex) => {
        allKeys.add(`${catIndex}-${qIndex}`);
      });
    });
    setOpenItems(allKeys);
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  const allExpanded = useMemo(() => {
    const totalQuestions = filteredFAQs.reduce(
      (sum, cat) => sum + cat.questions.length,
      0
    );
    return openItems.size === totalQuestions && totalQuestions > 0;
  }, [openItems, filteredFAQs]);

  return (
    <div className={className}>
      {/* Search and Controls */}
      {(showSearch || showExpandAll) && (
        <div className="mb-8 space-y-4">
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          )}

          {showExpandAll && (
            <div className="flex flex-wrap gap-3">
              <button
                onClick={expandAll}
                disabled={allExpanded}
                className={cn(
                  'px-4 py-2 rounded-md font-semibold transition-colors',
                  allExpanded
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90'
                )}
              >
                <Plus className="w-4 h-4 inline mr-2" />
                Expand All
              </button>
              <button
                onClick={collapseAll}
                disabled={openItems.size === 0}
                className={cn(
                  'px-4 py-2 rounded-md font-semibold transition-colors',
                  openItems.size === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                )}
              >
                <Minus className="w-4 h-4 inline mr-2" />
                Collapse All
              </button>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                selectedCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-stone-100 text-text-dark hover:bg-stone-200'
              )}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-stone-100 text-text-dark hover:bg-stone-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Sections */}
      {filteredFAQs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-dark text-lg">
            No FAQs found matching your search.
          </p>
        </div>
      ) : (
        filteredFAQs.map((category, categoryIndex) => (
          <section
            key={category.category}
            id={`category-${categoryIndex}`}
            className={cn(
              'py-8 md:py-12',
              categoryIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'
            )}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2
                  id={`category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair"
                >
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemKey = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems.has(itemKey);

                    return (
                      <div
                        key={faq.question}
                        className="bg-white rounded-lg shadow-two overflow-hidden border border-gray-200"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                          aria-expanded={isOpen ? 'true' : 'false'}
                        >
                          <span className="font-semibold text-text-dark pr-4 flex-1">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary" />
                            )}
                          </div>
                        </button>
                        <div
                          className={cn(
                            'overflow-hidden transition-all duration-300 ease-in-out',
                            isOpen
                              ? 'max-h-96 opacity-100'
                              : 'max-h-0 opacity-0'
                          )}
                        >
                          <div className="px-6 py-4 border-t border-gray-200 bg-stone-50">
                            <p className="text-text-dark leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
