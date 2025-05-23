# Lettuce Entertain You Code Challenge

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://lettuce-code-challenge.vercel.app)

A responsive restaurant website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/johnnywrightiv/lettuce-code-challenge
cd lettuce-code-challenge

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing the Application

1. **Responsive Design**: Resize the browser or use Chrome DevTools to test mobile, tablet, and desktop layouts
2. **Reservation Form**: Submit the reservation form to test UI feedback. Select a date or time in the past to test validation
3. **Dynamic Location Data**: Get contact details, hours of operation, and reservation time slots based on city by using the location selector
4. **Events Section**: Filter events by city using the filter buttons
5. **Theme Toggle**: Switch between light and dark mode using the theme selector
6. **Accessibility & Performance**: Test for accessibility compliance and performance using Lighthouse

## Key Features

- **Responsive Design**: Adapts to mobile, tablet, and desktop views
- **Reservation Form**: Validation with success and error toast notifications using sonner
- **Events Section**: Fetches and displays upcoming events with city filtering
- **Light/Dark Mode**: Theme switching functionality with next-themes
- **Location Context**: Context provider for location data shared across components
