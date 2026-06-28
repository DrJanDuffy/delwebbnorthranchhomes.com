import type { MetadataRoute } from 'next';
import { SITE_ORIGIN } from '@/lib/site';

/** Paths crawlers should not index (Next.js internals, APIs, legacy routes). */
const DISALLOW_PATHS = ['/api/', '/static/', '/_next/', '/message/'] as const;

function crawlerRule(userAgent: string): MetadataRoute.Robots['rules'][number] {
  return {
    userAgent,
    allow: '/',
    disallow: [...DISALLOW_PATHS],
  };
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      crawlerRule('*'),
      // ── AI Retrieval Bots (power AI search results) ──
      crawlerRule('GPTBot'),
      crawlerRule('ChatGPT-User'),
      crawlerRule('OAI-SearchBot'),
      crawlerRule('ClaudeBot'),
      crawlerRule('Claude-Web'),
      crawlerRule('PerplexityBot'),
      crawlerRule('Applebot-Extended'),
      crawlerRule('Bytespider'),
      // ── AI Training Bots (maximizes visibility in AI models) ──
      crawlerRule('Google-Extended'),
      crawlerRule('CCBot'),
      crawlerRule('cohere-ai'),
      crawlerRule('Meta-ExternalAgent'),
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
