'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import {
	useLocation,
	locationData,
} from '@/components/context/LocationContext';
import LocationSelector from '../LocationSelector';

export default function Contact() {
	const { location } = useLocation();
	const { email, phone, address, hours } = locationData[location];

	return (
		<section id="contact" className="">
			<h2 className="text-primary dark:text-secondary">Contact</h2>
			<h4>Mon Ami Gabi {location}</h4>
			<LocationSelector />

			{/* Table for Days and Times */}
			<table className="w-full border-collapse">
				<thead>
					<tr>
						<th className="text-left sr-only">Days</th>
						<th className="text-left sr-only">Times</th>
					</tr>
				</thead>
				<tbody>
					{hours.map(([day, time]) => (
						<tr key={day}>
							<td>{day}</td>
							<td>{time}</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Contact Information with Icons */}
			<div className="flex items-center space-x-4 mt-4">
				<div className="flex items-center">
					<Mail className="mr-2" />
					<span>{email}</span>
				</div>
				<div className="flex items-center">
					<Phone className="mr-2" />
					<span>{phone}</span>
				</div>
				<div className="flex items-center">
					<MapPin className="mr-2" />
					<span>{address}</span>
				</div>
			</div>
		</section>
	);
}
