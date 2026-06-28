import Link from 'next/link';
import type { FaqItem } from '@/lib/schema';
import { AGENT_INSIGHTS_DEFAULT } from '@/lib/seoContent';
import { HYPERLOCAL } from '@/lib/hyperlocal';

type FaqSectionProps = {
  items: FaqItem[];
  heading?: string;
};

export function FaqSection({ items, heading = 'Frequently Asked Questions' }: FaqSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
            {heading}
          </h2>
          <dl className="space-y-6">
            {items.map((item) => (
              <div key={item.question} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                <dt className="text-lg font-semibold text-primary mb-2 font-playfair">{item.question}</dt>
                <dd className="text-text-dark">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

type AgentInsightsProps = {
  insights?: string;
};

export function AgentInsights({ insights = AGENT_INSIGHTS_DEFAULT }: AgentInsightsProps) {
  return (
    <section className="py-12 md:py-16 bg-amber-50" aria-labelledby="agent-insights-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-lg border border-amber-200 bg-white p-6 md:p-8 shadow-two">
          <h2 id="agent-insights-heading" className="text-xl md:text-2xl font-bold text-primary mb-3 font-playfair">
            Agent Insights from {HYPERLOCAL.agentName}
          </h2>
          <p className="text-text-dark mb-4">{insights}</p>
          <p className="text-sm text-text-dark">
            License {HYPERLOCAL.agentLicense} · {HYPERLOCAL.brokerage} ·{' '}
            <Link href="/about" className="text-primary hover:text-accent font-medium">
              About Dr. Jan Duffy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

type SeoHubLinksProps = {
  heading?: string;
};

export function SeoHubLinks({ heading = 'Explore Del Webb North Ranch' }: SeoHubLinksProps) {
  const links = [
    { href: '/guide/55-plus-living-north-las-vegas', label: '55+ Living Guide' },
    { href: '/homes-for-sale', label: 'Homes for Sale' },
    { href: '/floor-plans', label: 'Floor Plans' },
    { href: '/markets/north-las-vegas/55-plus-cost-of-living', label: 'Cost of Living' },
    { href: '/compare/del-webb-north-ranch-vs-sun-city-aliante', label: 'Compare Communities' },
    { href: '/schedule', label: 'Schedule a Tour' },
  ];

  return (
    <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="hub-links-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="hub-links-heading" className="text-2xl font-bold text-primary mb-6 font-playfair">
            {heading}
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-full border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
