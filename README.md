# Spectrum - JStack

A modern, minimal web application built with Next.js, featuring a stunning UI and authentication system.

## Features

- 🎨 **Modern UI**: Clean, minimal design with smooth animations
- 🔐 **Authentication**: NextAuth.js with Google, GitHub, and credentials
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎭 **Animations**: Smooth transitions powered by Framer Motion

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OAuth app credentials (Google, GitHub)

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@hostname:port/database"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run db:push
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your production domain)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

## Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   ├── api/                # API routes
│   ├── context/            # React context
│   └── globals.css         # Global styles
├── components/
│   └── auth/               # Authentication components
├── lib/                    # Utility functions
└── server/                 # Backend logic
```

## License

MIT License