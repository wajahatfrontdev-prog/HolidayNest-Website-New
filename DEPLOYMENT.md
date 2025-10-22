# Holiday Nest - Deployment Guide

## Performance Optimizations Implemented

### 1. Image Optimization
- Enabled AVIF and WebP formats for better compression
- Configured responsive image sizes for different devices
- Remote pattern configuration for external images

### 2. Code Optimization
- SWC minification enabled for faster builds
- Experimental package import optimization for Supabase
- Compression enabled for all responses

### 3. Database Optimization
- Row Level Security (RLS) policies for data protection
- Indexed queries for faster lookups
- Connection pooling via Supabase

### 4. Frontend Performance
- Lazy loading for components
- CSS animations optimized with GPU acceleration
- Smooth transitions for better UX
- Responsive design for all devices

## Deployment Steps

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository with the code
- Supabase project configured

### Step 1: Prepare Environment Variables
Add these to your Vercel project settings:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/confirm
NEXT_PUBLIC_APP_URL=https://your-domain.com
\`\`\`

### Step 2: Deploy to Vercel
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Add environment variables
5. Click Deploy

### Step 3: Run Database Migrations
1. Go to your Supabase dashboard
2. Run the SQL scripts from `/scripts` folder:
   - `001_create_tables.sql`
   - `002_create_profile_trigger.sql`

### Step 4: Configure Email Service (Optional)
To enable actual email notifications, integrate with:
- SendGrid
- Resend
- Mailgun
- AWS SES

Update `/app/api/send-booking-confirmation/route.ts` with your email service.

## Security Checklist

- [x] Row Level Security (RLS) enabled on all tables
- [x] Authentication required for protected routes
- [x] Environment variables secured in Vercel
- [x] CORS properly configured
- [x] Input validation on all forms
- [x] SQL injection prevention via Supabase client

## Monitoring & Analytics

- Vercel Analytics enabled for performance monitoring
- Supabase dashboard for database monitoring
- Error tracking via console logs

## Performance Metrics

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Troubleshooting

### Authentication Issues
- Check Supabase URL and keys are correct
- Verify email confirmation is enabled
- Check middleware.ts is properly configured

### Booking Creation Fails
- Verify user is authenticated
- Check RLS policies are enabled
- Ensure database tables exist

### Email Not Sending
- Verify email service is configured
- Check API route is accessible
- Review server logs for errors

## Support

For issues or questions:
1. Check Supabase documentation: https://supabase.com/docs
2. Review Next.js docs: https://nextjs.org/docs
3. Contact support: support@holidaynest.com
