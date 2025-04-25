'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type EventType = {
	id: string;
	title: string;
	date?: string;
	cities?: string[];
	description?: string;
	featured_image?: {
		url: string;
		alt_text?: string;
	};
	cta_url?: string;
	cta_btn?: string;
	permalink?: string;
};

export default function Events() {
	const [events, setEvents] = useState<EventType[]>([]);
	const [filteredCity, setFilteredCity] = useState<string | null>(null);
	const [cities, setCities] = useState<string[]>([]);

	useEffect(() => {
		const fetchEvents = async () => {
			const res = await fetch(
				'https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events'
			);
			const data: EventType[] = await res.json();

			const now = new Date();

			const futureEvents = data.filter(
				(e) => e.date && new Date(e.date) >= now
			);

			const undatedEvents = data.filter((e) => !e.date);

			const sortedEvents = [
				...futureEvents.sort(
					(a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
				),
				...undatedEvents,
			];

			setEvents(sortedEvents);

			const citySet = new Set<string>();
			data.forEach((e) => e.cities?.forEach((city) => citySet.add(city)));
			setCities(Array.from(citySet));
		};

		fetchEvents();
	}, []);

	const displayedEvents = filteredCity
		? events.filter((e) => e.cities?.includes(filteredCity))
		: events;

	return (
		<section id="events" className="bg-accent text-light py-16 px-4">
			<div className="container mx-auto max-w-screen-xl space-y-6">
				<h2 className="text-center">Upcoming Events</h2>
				<div className="flex flex-wrap gap-2 justify-center mb-16">
					<Button
						className={`hover:cursor-pointer ${filteredCity ? 'text-light' : 'text-accent'}`}
						variant={filteredCity === null ? 'outline' : 'ghost'}
						aria-pressed={filteredCity === null}
						onClick={() => setFilteredCity(null)}
					>
						All
					</Button>
					{cities.map((city) => (
						<Button
							key={city}
							className={`hover:cursor-pointer ${filteredCity === city ? 'text-accent' : 'text-light'}`}
							variant={filteredCity === city ? 'outline' : 'ghost'}
							aria-pressed={filteredCity === city}
							onClick={() => setFilteredCity(city)}
						>
							{city}
						</Button>
					))}
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayedEvents.map((event) => (
						<article
							key={event.id + event.title}
							className="bg-black/60 rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
							aria-label={`Event: ${event.title}`}
						>
							{event.featured_image?.url && (
								<Image
									src={event.featured_image.url}
									alt={event.featured_image.alt_text || event.title}
									height={480}
									width={640}
									className="w-full h-48 object-cover"
								/>
							)}
							<div className="p-4 flex flex-col flex-grow space-y-2">
								<h3 className="text-xl font-semibold">
									<a
										href={event.permalink}
										className="hover:underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										{event.title}
									</a>
								</h3>
								{event.date && (
									<p className="text-sm text-secondary">
										{new Date(event.date).toLocaleDateString()}
									</p>
								)}
								{event.cities && (
									<p className="text-sm">{event.cities.join(', ')}</p>
								)}
								{event.description && (
									<p className="text-sm text-light flex-grow">
										{event.description}
									</p>
								)}
							</div>
							{event.cta_url && event.cta_btn && (
								<a
									href={event.cta_url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-auto text-sm text-secondary underline p-4 bg-light rounded-b-2xl"
								>
									{event.cta_btn}
								</a>
							)}
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
