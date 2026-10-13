# Social SaaS

A full-stack media management platform for social content creators. Upload, store, preview, and download images and videos through a secure, user-scoped library. Image and video processing tools (social-media resizing, compression, format conversion, and more) are in active development.

> **Status:** 🚧 In active development

## Features

### Authentication
- Clerk authentication
- Protected `(services)` route group
- Per-user data ownership via `userId`

### Video Library
- Video upload to Cloudinary with compression/transformation
- Metadata (title, duration, file size) stored in PostgreSQL
- Preview/thumbnail cards
- Download with title-based filename
- Paginated library (`/videos`) with loading, empty, and error states

### Image Library
- Image upload to Cloudinary
- Metadata stored in PostgreSQL
- Thumbnails via `next-cloudinary`
- Download through a protected API route
- Image deletion
- Paginated library (`/images`) with loading, empty, and error states

### Dashboard
- Lightweight `/home` with quick image/video upload
- Direct links to the image and video libraries

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| Auth | Clerk |
| ORM | Prisma 8 |
| Database | PostgreSQL |
| Media Storage | Cloudinary (`next-cloudinary`) |

## Architecture

```text
/home
  ├── Images → /images   (paginated image library)
  └── Videos → /videos   (paginated video library)
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- [Clerk](https://clerk.com) account
- [Cloudinary](https://cloudinary.com) account

### Installation

```bash
git clone https://github.com/CWJihad/social-saas.git
cd social-saas
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/social_saas"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Database Setup

```bash
npx prisma migrate dev
npx prisma generate
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roadmap

- [x] **Foundation** — Next.js, Clerk, Prisma, PostgreSQL
- [x] **Video library** — upload, storage, pagination, download
- [x] **Image library** — upload, storage, pagination, download, delete
- [x] **Dashboard** — lightweight home with quick uploads
- [ ] **Image services** — resize, social presets (Instagram Square/Portrait, Facebook, Twitter/X), custom dimensions, compression, quality selection, format conversion (JPG/PNG/WebP), background remover
- [ ] **Video services** — compression options, quality selection, subtitles, more transformations
- [ ] **UI/UX** — responsive sidebar, dark/light mode, toasts, upload progress, confirmation dialogs, accessibility
- [ ] **Performance** — database-level pagination, direct browser → Cloudinary uploads, caching
- [ ] **Security** — file validation, rate limiting, authorization review
- [ ] **Production** — deployment, monitoring, backups

## Known Limitations

- Pagination currently fetches all records and slices in memory; database-level pagination is planned.

## License

This project is for learning and portfolio purposes. Add a license of your choice before public release.