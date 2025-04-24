import Image from 'next/image';

export default function About() {
	return (
		<section
			id="about"
			className="bg-white dark:bg-primary w-full mx-auto px-8 py-8"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
				{/* Image Gallery */}
				<div className="grid grid-cols-2 grid-rows-2 gap-4">
					<div className="row-span-1 self-end">
						<Image
							src="/assets/FarmersMarket_-2797.jpg"
							alt="Fresh produce at Farmers Market"
							width={600}
							height={400}
							className="rounded-lg shadow-xl object-cover"
							priority
						/>
					</div>
					<div className="row-span-1">
						<Image
							src="/assets/MAG-MushroomPasta-1578.jpg"
							alt="Mushroom pasta dish"
							width={600}
							height={400}
							className="rounded-lg shadow-xl object-cover"
							priority
						/>
					</div>
					<div className="col-span-2 row-span-1 justify-self-end">
						<Image
							src="/assets/MAG-382.jpg"
							alt="Restaurant interior"
							width={600}
							height={400}
							className="rounded-lg shadow-xl object-cover"
							priority
						/>
					</div>
				</div>

				{/* Text Content */}
				<div className="space-y-4 self-center">
					<h2 className="text-primary dark:text-secondary">About</h2>
					<p>
						Mon Ami Gabi is a classic French bistro that embraces a passion for
						food, wine and culture. Whether you come for the Onion Soup Au
						Gratin, Steak Frites or decadent Profiteroles, Mon Ami Gabi offers
						something to satisfy all tastes. For those looking to indulge in a{' '}
						<em className="text-accent font-semibold">unique dish</em>, the
						Escargots de Bourgogne with garlic-herb butter is literally a
						sizzling experience.
					</p>
					<p>
						To complement the menu, an extensive selection of more than{' '}
						<strong className="text-accent italic">
							80 boutique French wine varietals
						</strong>
						, handpicked by renowned chef and owner Gabino Sotelino, are served
						by the glass or bottle from our signature rolling wine cart.
					</p>
					<p>
						While the favorites are here in abundance, there&apos;s always
						something new when you&apos;re ready to fall in love all over again.
					</p>
				</div>
			</div>
		</section>
	);
}
