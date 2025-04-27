'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navigationLinks = [
	{ label: 'Reservations', href: '/reservations' },
	{ label: 'Menu', href: '/menu' },
	{ label: 'Events', href: '/events' },
	{ label: 'Private Parties', href: '/parties' },
	{ label: 'Pick Up', href: '/pickup' },
	{ label: 'Delivery', href: '/delivery' },
	{ label: 'Contact Us', href: '/contact' },
	{ label: 'Gallery', href: '/gallery' },
];

type NavbarProps = {
	isMobile?: boolean;
};

export default function Navbar({ isMobile = false }: NavbarProps) {
	const pathname = usePathname();

	return (
		<ul
			className={
				isMobile
					? 'flex-col space-y-2'
					: 'flex justify-center flex-wrap space-x-2'
			}
		>
			{navigationLinks.map((link) => {
				const isActive = pathname === link.href;

				return (
					<li key={link.href}>
						<Button
							asChild
							variant="link"
							className={`text-sm ${isMobile ? 'w-full justify-start' : ''} ${isActive ? 'font-bold text-secondary' : ''}`}
							aria-current={isActive ? 'page' : undefined}
						>
							<Link href={link.href}>{link.label}</Link>
						</Button>
					</li>
				);
			})}
		</ul>
	);
}
