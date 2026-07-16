# My Blog

![App Preview](https://imgix.cosmicjs.com/a870cb90-812a-11f1-90a0-bb34f9b6dfc3-autopilot-photo-1555066931-4365d14bab8c-1784215563965.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive blog platform built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Explore posts, discover authors, and browse categories with a clean, editorial-focused design.

## Features

- 📝 **Dynamic Blog Posts** — Full post pages with featured images, rich content, and tags
- 👤 **Author Profiles** — Dedicated pages showcasing each author's bio, avatar, and their posts
- 🏷️ **Category Browsing** — Filter and explore posts organized by category
- 🎨 **Modern, Responsive UI** — Clean typography and layouts that look great on any device
- ⚡ **Server-Rendered Performance** — Fast page loads with Next.js App Router server components
- 🔗 **Fully Interconnected** — Posts link to their authors and categories seamlessly
- 🖼️ **Optimized Images** — imgix-powered image optimization for crisp, fast visuals

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a58f7cdbd928dd2f87bc85a&clone_repository=6a58f8aebd928dd2f87bc894)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic** ([SDK v2](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `authors`, `categories`, and `posts` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file with your Cosmic credentials:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

Fetch all posts with their connected authors and categories:

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

Fetch a single post by slug:

```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1)

const post = response.object
```

## Cosmic CMS Integration

This app leverages three Cosmic object types:

- **Posts** — `title`, `content`, `featured_image`, `tags`, `author` (object), `category` (object)
- **Authors** — `name`, `bio`, `avatar`, `email`
- **Categories** — `name`, `description`

Connected objects (author & category) are resolved using the `depth` parameter so nested data is available directly in the response. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to a Git repository
2. Import the project into [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add your environment variables
5. Deploy!

<!-- README_END -->