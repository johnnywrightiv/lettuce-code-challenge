'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
	const links = [
		{ label: 'Reservations', href: '/reservations' },
		{ label: 'Menu', href: '/menu' },
		{ label: 'Events', href: '/events' },
		{ label: 'Private Parties', href: '/parties' },
		{ label: 'Pick Up', href: '/pickup' },
		{ label: 'Delivery', href: '/delivery' },
		{ label: 'Contact Us', href: '/contact' },
		{ label: 'Gallery', href: '/gallery' },
	];

	return (
		<ul className="flex justify-center space-x-2">
			{links.map((link) => (
				<li key={link.href}>
					<Button asChild variant="link" className="text-sm">
						<Link href={link.href}>{link.label}</Link>
					</Button>
				</li>
			))}
		</ul>
	);
}
