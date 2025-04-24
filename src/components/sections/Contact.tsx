import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
	return (
		<section id="contact" className="">
			<h2 className="text-primary dark:text-secondary">Contact</h2>
			<h4>Mon Ami Gabi Chicago</h4>
			<p>CHANGE LOCATION</p>

			{/* Table for Days and Times */}
			<table className="w-full border-collapse">
				<thead>
					<tr>
						<th className="text-left sr-only">Days</th>
						<th className="text-left sr-only">Times</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Mon - Thu</td>
						<td>5:00pm - 9:30pm</td>
					</tr>
					<tr>
						<td>Fri - Sat</td>
						<td>5:00pm - 10:30pm</td>
					</tr>
					<tr>
						<td>Sun Brunch</td>
						<td>10:00am - 2:00pm</td>
					</tr>
					<tr>
						<td>Sunday</td>
						<td>5:00pm - 8:30pm</td>
					</tr>
				</tbody>
			</table>

			{/* Contact Information with Icons */}
			<div className="flex items-center space-x-4 mt-4">
				<div className="flex items-center">
					<Mail className="mr-2" /> {/* Replace with your icon component */}
					<span>info@monamigabi.com</span>
				</div>
				<div className="flex items-center">
					<Phone className="mr-2" /> {/* Replace with your icon component */}
					<span>773.348.8886</span>
				</div>
				<div className="flex items-center">
					<MapPin className="mr-2" /> {/* Replace with your icon component */}
					<span>2300 N. Lincoln Park West, Chicago, IL 60614</span>
				</div>
			</div>
		</section>
	);
}
