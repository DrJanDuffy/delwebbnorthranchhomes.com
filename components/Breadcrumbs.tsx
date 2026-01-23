import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const baseUrl = 'https://www.delwebbnorthranchhomes.com';

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn('py-4 border-b border-gray-200 bg-white', className)}
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
                )}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="flex items-center hover:text-primary transition-colors"
                    aria-label={item.label}
                  >
                    <Home className="w-4 h-4 mr-1" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                ) : index === items.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
