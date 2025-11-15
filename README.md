# Portfolio Website

A modern, bold, and creative portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Bold & Creative Design** - Vibrant gradients, dynamic animations, and modern UI
- **Smooth Animations** - Powered by Framer Motion for seamless transitions
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Fast Performance** - Built with Next.js 14+ for optimal speed
- **Modern Stack** - TypeScript, Tailwind CSS, and React 18

## Sections

- **Hero** - Eye-catching introduction with animated background
- **About** - Personal information and statistics
- **Experience** - Professional timeline with animated cards
- **Projects** - Showcase of work with hover effects
- **Education** - Educational background timeline
- **Skills** - Animated skill bars and technology icons
- **Contact** - Contact form and social links
- **Footer** - Additional links and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend account (for email functionality) - [Sign up here](https://resend.com)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
   - Get your API key from [Resend Dashboard](https://resend.com/api-keys)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Content

- Edit component files in `app/components/` to update content
- Modify the data arrays in each component (projects, experience, education, etc.)
- Update social links in `Contact.tsx`
- Change colors and gradients in Tailwind classes

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles are inline with Tailwind classes

### Colors & Theme

The portfolio uses a bold color scheme with:
- Primary: Purple (#9333EA)
- Secondary: Pink (#EC4899)
- Accent: Orange (#F97316)

You can customize these in the component files by updating the gradient classes.

## Project Structure

```
/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # API route for contact form (Vercel serverless function)
│   ├── components/         # React components
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .env.local              # Environment variables (create this file)
└── package.json            # Dependencies
```

## Email Functionality

The contact form uses Resend for sending emails. To set it up:

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the [Resend Dashboard](https://resend.com/api-keys)
3. **Add the API key** to your `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. **Update the sender email** in `app/api/contact/route.ts`:
   - By default, it uses `onboarding@resend.dev` (works for testing)
   - For production, verify your domain in Resend and update the `from` field

### Deploying to Vercel

When deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your Resend API key value
4. Redeploy your application

The API route at `/api/contact` automatically becomes a Vercel serverless function when deployed.

## Technologies Used

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React 18** - UI library
- **Resend** - Email service for contact form

## License

This project is open source and available under the MIT License.

