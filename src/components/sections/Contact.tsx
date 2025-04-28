'use client';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation, locationData } from '@/context/LocationProvider';
import LocationSelector from '@/components/LocationSelector';
import Image from 'next/image';

export default function Contact() {
  const { location } = useLocation();
  const { email, phone, address, hours } = locationData[location];

  return (
    <section id="contact" className="bg-primary text-light relative">
      {/* Anchored Image inside section */}
      <div className="absolute bottom-0 -left-8">
        <Image
          src="/assets/Charcuterie.png"
          alt="Charcuterie plate"
          height={400}
          width={400}
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto max-w-screen-xl relative z-10">
        <div className="grid sm:grid-cols-2 gap-12 items-start justify-center px-4 pt-8 sm:pt-20">
          {/* Spacer */}
          <div className="block" />

          {/* Contact Info */}
          <div className="space-y-6 mb-8 bg-black/60 p-2 sm:bg-transparent">
            <h2 className="mb-0 text-xl md:text-3xl">
              Mon Ami Gabi {location}
            </h2>
            <LocationSelector className="text-light italic" />

            <div>
              <h3 className="sr-only">Hours</h3>
              <table className="w-full">
                <tbody>
                  {hours.map(([day, time], i) => (
                    <tr key={i}>
                      <td className="py-1 pr-8 font-medium">{day}</td>
                      <td className="py-1 text-light">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 ">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-3 hover:text-secondary transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>{email}</span>
              </a>
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-3 hover:text-secondary transition-colors"
              >
                <FaPhoneAlt className="w-5 h-5" />
                <span>{phone}</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-secondary transition-colors"
              >
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>{address}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
