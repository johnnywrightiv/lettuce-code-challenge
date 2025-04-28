import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Events from '@/components/sections/Events';
import Reservations from '@/components/sections/Reservations';

export default function Home() {
  return (
    <div className="pt-16 md:pt-30 lg:pt-36 w-full bg-white">
      <About />
      <Reservations />
      <Events />
      <Contact />
    </div>
  );
}
