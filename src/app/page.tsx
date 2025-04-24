import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Events from '@/components/sections/Events';
import Reservations from '@/components/sections/Reservations';

export default function Home() {
	return (
		<div className="space-y-8 pt-36 h-screen">
			<About />
			<Reservations />
			<Events />
			<Contact />
		</div>
	);
}
