'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ThemeToggle from '@/components/ThemeSelector';
import Link from 'next/link';
import { useLocation } from '@/context/LocationProvider';
import LocationSelector from '../LocationSelector';

export default function Header() {
	const { location } = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className="w-full border-b border-secondary fixed bg-background z-20"
			role="banner"
		>
			<div
				className="grid grid-cols-3 md:grid-cols-3 items-center px-4 py-2"
				aria-label="Top Header Row"
			>
				{/* Left Border */}
				<div
					className="absolute top-16 left-0 mt-2 hidden md:flex items-center"
					aria-hidden="true"
				>
					<div className="w-20 md:w-40 border-b border-secondary" />
					<div className="w-1 h-1 rounded-full bg-secondary" />
				</div>

				{/* Right Border */}
				<div
					className="absolute top-16 right-0 mt-2 hidden md:flex items-center justify-end"
					aria-hidden="true"
				>
					<div className="w-1 h-1 rounded-full bg-secondary" />
					<div className="w-20 md:w-40 border-b border-secondary" />
				</div>

				{/* Socials */}
				<div
					aria-label="Social media"
					className="hidden md:flex gap-4 justify-start items-center"
				>
					<a
						href="https://twitter.com/lettuceeats"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaTwitter className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://instagram.com/lettuceentertainyou"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaInstagram className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://facebook.com/lettuceentertainyou"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaFacebookF className="h-5 w-5" aria-hidden="true" />
					</a>
					<ThemeToggle />
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center">
					<button
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
						className="p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
					>
						<RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
					</button>
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

				{/* Location */}
				<div className="hidden md:flex justify-end">
					<div className="flex flex-col items-center text-right">
						<span className="font-[Baskervville] leading-tight">
							{location}
						</span>
						<LocationSelector className="text-foreground pr-2" />
					</div>
				</div>
			</div>

			{/* Mobile Header */}
			<div
				id="mobile-menu"
				className={`md:hidden bg-background ${isMenuOpen ? 'block' : 'hidden'} py-2 px-4`}
			>
				{/* Location selector for mobile */}
				<div className="flex justify-center border-b border-gray-200 pb-4">
					<div className="flex flex-col items-center">
						<span className="font-[Baskervville] leading-tight text-center mb-1">
							{location}
						</span>
						<LocationSelector className="text-foreground" />
					</div>
				</div>

				{/* Mobile navigation */}
				<nav aria-label="Mobile navigation">
					<Navbar isMobile={true} />
				</nav>

				{/* Social icons for mobile */}
				<div className="flex items-center justify-around py-2 border-t border-gray-200 mt-1 pt-4">
					<a
						href="https://twitter.com/lettuceeats"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaTwitter className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://instagram.com/lettuceentertainyou"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaInstagram className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://facebook.com/lettuceentertainyou"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:scale-110 hover:text-secondary"
					>
						<FaFacebookF className="h-5 w-5" aria-hidden="true" />
					</a>
					<ThemeToggle />
				</div>
			</div>

			{/* Desktop Navigation */}
			<nav className="mt-4 hidden md:block" aria-label="Main navigation">
				<Navbar isMobile={false} />
			</nav>
		</header>
	);
}
