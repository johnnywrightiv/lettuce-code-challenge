import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Events from '@/components/sections/Events';
import Reservations from '@/components/sections/Reservations';

export default function Home() {
	return (
		<div className="pt-30 lg:pt-36 w-full">
			<About />
			<Reservations />
			<Events />
			<Contact />
		</div>
	);
}
