'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function Header() {
	const [location, setLocation] = useState<
		'Chicago' | 'Bethesda' | 'Las Vegas'
	>('Chicago');

	const handleLocationChange = (newLocation: typeof location) => {
		setLocation(newLocation);
	};

	return (
		<header className="w-full shadow-sm" role="banner">
			{/* Top Row */}
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

				{/* Right Border*/}
				<div
					className="absolute top-16 right-0 flex items-center justify-end"
					aria-hidden="true"
				>
					<div className="w-1 h-1 rounded-full bg-secondary" />
					<div className="w-40 border-b border-secondary" />
				</div>

				{/* Social Links */}
				<div
					aria-label="Social media"
					className="flex gap-4 justify-start items-center"
				>
					<a
						href="https://twitter.com/lettuceeats"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://instagram.com/lettuceentertainyou"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="h-5 w-5" aria-hidden="true" />
					</a>
					<a
						href="https://facebook.com/lettuceentertainyou"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="h-5 w-5" aria-hidden="true" />
					</a>

					{/* OPTIONAL: Theme Toggle */}
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
								className="mx-auto"
								priority
							/>
						</h1>
					</Link>
				</div>

				{/* Location Selector */}
				<div className="flex justify-end">
					<div className="flex flex-col items-center text-right">
						<span className="font-[Baskervville] leading-tight">
							{location}
						</span>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="link"
									className="text-xs uppercase px-0 h-auto hover:cursor-pointer"
									aria-label="Change location"
								>
									Change Location
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem
									onClick={() => handleLocationChange('Bethesda')}
								>
									Bethesda
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => handleLocationChange('Chicago')}
								>
									Chicago
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => handleLocationChange('Las Vegas')}
								>
									Las Vegas
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>

			{/* Navbar Row */}
			<nav className="mt-2" aria-label="Main navigation">
				<Navbar />
			</nav>
		</header>
	);
}
