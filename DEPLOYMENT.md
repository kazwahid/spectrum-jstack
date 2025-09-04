# Deployment Guide

## Prerequisites

1. **Git** - Install from [git-scm.com](https://git-scm.com/)
2. **GitHub Account** - Create at [github.com](https://github.com/)
3. **Vercel Account** - Create at [vercel.com](https://vercel.com/)
4. **Database** - Set up PostgreSQL (recommend Neon or Supabase)

## Step 1: Install Git

Download and install Git from [git-scm.com](https://git-scm.com/)

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com/)
2. Click "New repository"
3. Name it: `spectrum-jstack`
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Push to GitHub

Open PowerShell/Command Prompt in your project folder and run:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Spectrum JStack app"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/spectrum-jstack.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Set Up Database

### Option A: Neon (Recommended)
1. Go to [neon.tech](https://neon.tech/)
2. Create a new project
3. Copy the connection string
4. Run migrations: `npm run db:push`

### Option B: Supabase
1. Go to [supabase.com](https://supabase.com/)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Run migrations: `npm run db:push`

## Step 5: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `DATABASE_URL` - Your database connection string
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your Vercel domain (auto-filled)
   - `GOOGLE_CLIENT_ID` - From Google Console
   - `GOOGLE_CLIENT_SECRET` - From Google Console
   - `GITHUB_CLIENT_ID` - From GitHub OAuth App
   - `GITHUB_CLIENT_SECRET` - From GitHub OAuth App

## Step 6: Set Up OAuth Apps

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.vercel.app/api/auth/callback/google` (production)

### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth App
3. Add callback URLs:
   - `http://localhost:3000/api/auth/callback/github` (development)
   - `https://your-domain.vercel.app/api/auth/callback/github` (production)

## Step 7: Final Deployment

1. Push any changes to GitHub
2. Vercel will automatically redeploy
3. Test your live application!

## Troubleshooting

### Build Errors
- Check all environment variables are set
- Ensure database is accessible
- Check Next.js logs in Vercel dashboard

### Authentication Issues
- Verify OAuth callback URLs match exactly
- Check environment variables are correct
- Ensure database tables are created

### Database Issues
- Run `npm run db:push` locally first
- Check connection string format
- Verify database is accessible from Vercel
