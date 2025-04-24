'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { useLocation } from '@/components/context/LocationContext';
import LocationSelector from '../LocationSelector';

export default function Header() {
	const { location } = useLocation();

	return (
		<header
			className="w-screen shadow-xs shadow-secondary fixed bg-background z-20"
			role="banner"
		>
			<div
				className="grid grid-cols-3 items-center px-4 py-2"
				aria-label="Top Header Row"
			>
				{/* Left Border */}
				<div
					className="absolute top-16 left-0 flex items-center"
					aria-hidden="true"
				>
					<div className="w-40 border-b border-secondary" />
					<div className="w-1 h-1 rounded-full bg-secondary" />
				</div>

				{/* Right Border */}
				<div
					className="absolute top-16 right-0 flex items-center justify-end"
					aria-hidden="true"
				>
					<div className="w-1 h-1 rounded-full bg-secondary" />
					<div className="w-40 border-b border-secondary" />
				</div>

				{/* Social */}
				<div
					aria-label="Social media"
					className="flex gap-4 justify-start items-center"
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

				{/* Logo */}
				<div className="flex justify-center">
					<Link href="/" aria-label="Navigate to homepage">
						<h1>
							<Image
								src="/assets/logo.png"
								alt="Mon Ami Gabi Logo"
								width={300}
								height={40}
								className="mx-auto pt-4"
								priority
							/>
						</h1>
					</Link>
				</div>

				{/* Location */}
				<div className="flex justify-end">
					<div className="flex flex-col items-center text-right">
						<span className="font-[Baskervville] leading-tight">
							{location}
						</span>
						<LocationSelector className="text-foreground pr-2" />
					</div>
				</div>
			</div>

			<nav className="mt-4" aria-label="Main navigation">
				<Navbar />
			</nav>
		</header>
	);
}
