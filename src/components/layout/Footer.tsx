import React from 'react';

export default function Footer() {
	const links = [
		{ label: 'Frequent Diner', href: 'https://lettuce.com/frequent-diner' },
		{ label: 'Gift Cards', href: 'https://lettuce.com/gift-cards' },
		{ label: 'Employment', href: 'https://lettuce.com/join-our-team' },
		{ label: 'LEYE.COM', href: 'https://lettuce.com' },
		{ label: 'Terms of Use', href: 'https://lettuce.com/terms-of-use' },
		{ label: 'Privacy Policy', href: 'https://lettuce.com/privacy-policy' },
	];

	return (
		<footer className="w-full bg-foreground text-background py-4 mt-auto">
			<div className="max-w-5xl mx-auto px-4">
				<nav aria-label="Footer navigation">
					<ul className="flex justify-evenly w-full">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm hover:cursor-pointer hover:underline"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
}
