# Next.js 15 Best Practices - Del Webb North Ranch

## ✅ Image Optimization

Always use Next.js `Image` component for optimized images:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-bg.jpg"
  alt="Del Webb North Ranch community entrance with beautiful landscaping"
  width={1920}
  height={1080}
  priority // for above-fold hero images
/>
```

**Key points:**
- Use `fill` for background images with `sizes` prop
- Use `priority` for above-the-fold images (hero sections)
- Always include descriptive `alt` text
- Use `placeholder="blur"` with `blurDataURL` for better UX

## ✅ Server vs Client Components

### Server Components (Default)
- Data fetching (`getDelWebbListings()`, API calls)
- SEO-critical content
- Static rendering
- No `"use client"` directive needed

### Client Components
**Use `"use client"` for:**
- Contact forms (state, validation)
- Image galleries (lightbox, carousel)
- Interactive maps (Google Maps, Mapbox)
- Search filters (this project's listings filters)
- Any component using:
  - `useState`, `useEffect`, `useMemo`, etc.
  - Browser APIs (`window`, `document`, `localStorage`)
  - Event handlers (`onClick`, `onChange`)

**Pattern:**
```tsx
// Server Component (page.tsx)
export default async function Page() {
  const data = await fetchData()
  return <ClientComponent initialData={data} />
}

// Client Component
'use client'
export function ClientComponent({ initialData }) {
  const [state, setState] = useState(initialData)
  // Interactive logic here
}
```

## ✅ Metadata & SEO

### Static Pages
```tsx
export const metadata: Metadata = {
  title: "Page Title | Del Webb North Ranch | North Las Vegas",
  description: "Description including 'Del Webb North Ranch,' '55+,' and 'North Las Vegas'",
  alternates: {
    canonical: "https://delwebbnorthranchhomes.com/page-path",
  },
  openGraph: {
    title: "Page Title | Del Webb North Ranch",
    description: "OG description",
    url: "https://delwebbnorthranchhomes.com/page-path",
    siteName: "Del Webb North Ranch Homes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Twitter description",
  },
}
```

### Dynamic Pages (Blog Posts)
```tsx
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: `${post.title} | Del Webb North Ranch Blog | North Las Vegas`,
    description: `${post.excerpt} Read more about Del Webb North Ranch, a premier 55+ community in North Las Vegas.`,
    alternates: {
      canonical: `https://delwebbnorthranchhomes.com/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Del Webb North Ranch`,
      description: post.excerpt,
      url: `https://delwebbnorthranchhomes.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  }
}
```

## ❌ Don't Do

- ❌ Don't use `"use client"` unless interactivity required
- ❌ Don't fetch data in client components (use Server Actions or API routes)
- ❌ Don't skip descriptive `alt` text on images
- ❌ Don't hardcode metadata—use `generateMetadata` for dynamic pages
- ❌ Don't forget canonical URLs on every page
- ❌ Don't use generic descriptions—always include:
  - "Del Webb North Ranch"
  - "55+" or "active adult community"
  - "North Las Vegas"

## 📁 Project Structure

```
app/
├── page.tsx              # Homepage ✅
├── layout.tsx            # Root layout with JSON-LD schema
├── homes-for-sale/
│   └── page.tsx          # MLS listings (async server component)
├── floor-plans/
│   └── page.tsx          # Cottage, Classic, Retreat series
├── amenities/
│   └── page.tsx          # Pool, fitness, pickleball, clubhouse
├── lifestyle/
│   └── page.tsx          # Active adult living content
├── about/
│   └── page.tsx          # Dr. Jan Duffy bio
├── blog/
│   ├── page.tsx          # Blog listing
│   └── [slug]/
│       └── page.tsx      # Individual posts (generateMetadata)
├── faq/
│   └── page.tsx          # Common questions
├── contact/
│   └── page.tsx          # Contact form (client component)
└── privacy/
    └── page.tsx          # Privacy policy
```

## 🎯 SEO Checklist

Every page should have:
- [ ] Unique, descriptive title (includes location/keywords)
- [ ] Meta description (includes "Del Webb North Ranch," "55+," "North Las Vegas")
- [ ] Canonical URL
- [ ] OpenGraph tags
- [ ] Twitter card
- [ ] Proper H1 heading
- [ ] Descriptive image alt text
- [ ] LocalBusiness schema (in root layout)

## 📝 Content Guidelines

**Always include in descriptions:**
- "Del Webb North Ranch" (community name)
- "55+" or "active adult community" (target demographic)
- "North Las Vegas" (location)
- "Dr. Jan Duffy" (agent name when relevant)
- Price range "$400K-$600K" (when relevant)

**Example:**
> "Discover luxury single-story living in Del Webb North Ranch, a vibrant 55+ community in North Las Vegas with mountain views and resort-style amenities."
