'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

type NavbarProps = {
	isMobile?: boolean;
};

export default function Navbar({ isMobile = false }: NavbarProps) {
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

	if (isMobile) {
		return (
			<ul className="flex flex-col space-y-2">
				{links.map((link) => (
					<li key={link.href}>
						<Button
							asChild
							variant="link"
							className="text-sm w-full justify-start"
						>
							<Link href={link.href}>{link.label}</Link>
						</Button>
					</li>
				))}
			</ul>
		);
	}

	return (
		<ul className="flex justify-center flex-wrap space-x-2">
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
