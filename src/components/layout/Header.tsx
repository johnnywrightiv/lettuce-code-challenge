'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useLocation } from '@/context/LocationProvider';
import LocationSelector from '../LocationSelector';
import ThemeToggle from '@/components/ThemeSelector';
import Navbar from '@/components/layout/Navbar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const SocialLinks = ({ className = '' }) => (
  <div
    className={`flex gap-3 items-center ${className}`}
    aria-label="Social media links"
  >
    <a
      href="https://twitter.com/lettuceeats"
      aria-label="Twitter"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-full p-1"
    >
      <FaTwitter className="h-5 w-5" aria-hidden="true" />
    </a>
    <a
      href="https://instagram.com/lettuceentertainyou"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-full p-1"
    >
      <FaInstagram className="h-5 w-5" aria-hidden="true" />
    </a>
    <a
      href="https://facebook.com/lettuceentertainyou"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-full p-1"
    >
      <FaFacebookF className="h-5 w-5" aria-hidden="true" />
    </a>
  </div>
);

const LocationDisplay = ({ className = '' }) => {
  const { location } = useLocation();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="font-[Baskervville] leading-tight">{location}</span>
      <LocationSelector className="text-foreground" />
    </div>
  );
};

export default function Header() {
  const decorativeBorder = (position: 'left' | 'right') => (
    <div
      className={`absolute top-16 ${position}-0 mt-2 hidden md:flex items-center ${position === 'right' ? 'justify-end' : ''}`}
      aria-hidden="true"
    >
      {position === 'right' && (
        <div className="w-1 h-1 rounded-full bg-secondary" />
      )}
      <div className="w-20 md:w-40 border-b border-secondary" />
      {position === 'left' && (
        <div className="w-1 h-1 rounded-full bg-secondary" />
      )}
    </div>
  );

  return (
    <header
      className="w-[100vw] fixed bg-white dark:bg-black z-20"
      role="banner"
    >
      <div
        className="grid grid-cols-3 md:grid-cols-3 items-center px-4 py-2"
        aria-label="Top Header Row"
      >
        {/* Decorative Borders */}
        {decorativeBorder('left')}
        {decorativeBorder('right')}

        {/* Socials - Desktop */}
        <div className="hidden md:flex justify-start items-center">
          <SocialLinks />
          <ThemeToggle />
        </div>

        {/* Mobile Menu  */}
        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Open menu to navigate on mobile devices
            </SheetDescription>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex justify-center mb-6">
                  <Link href="/" aria-label="Navigate to homepage">
                    <Image
                      src="/assets/logo.png"
                      alt="Mon Ami Gabi Logo"
                      width={180}
                      height={30}
                      className="w-auto h-auto"
                      priority
                    />
                  </Link>
                </div>

                {/* Location - Mobile */}
                <div className="flex justify-center border-b border-gray-200 pb-4 mb-4">
                  <LocationDisplay />
                </div>

                {/* Navigation - Mobile */}
                <nav aria-label="Mobile navigation" className="flex-grow">
                  <Navbar isMobile={true} />
                </nav>

                {/* Socials - Mobile */}
                <div className="flex justify-around pt-4 border-t border-gray-200 mt-auto">
                  <SocialLinks className="justify-center" />
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="Navigate to homepage">
            <h1>
              <Image
                src="/assets/logo.png"
                alt="Mon Ami Gabi Logo"
                width={300}
                height={40}
                className="mx-auto pt-4 w-auto h-auto max-w-full"
                priority
              />
            </h1>
          </Link>
        </div>

        {/* Location - Desktop */}
        <div className="hidden md:flex justify-end">
          <LocationDisplay className="text-right" />
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="mt-4 hidden md:block" aria-label="Main navigation">
        <Navbar isMobile={false} />
      </nav>
    </header>
  );
}
