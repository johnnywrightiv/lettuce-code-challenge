// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select';
// import { Calendar } from '@/components/ui/calendar';
// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// } from '@/components/ui/popover';
// import { toast } from 'sonner';
// import { format } from 'date-fns';
// import { Calendar as CalendarIcon } from 'lucide-react';

// export default function Reservations() {
// 	const [date, setDate] = useState<Date | undefined>(new Date());
// 	const [people, setPeople] = useState<string>('2');
// 	const [time, setTime] = useState<string>('7:00pm');

// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		const details = {
// 			people,
// 			date: date ? format(date, 'MMM dd, yyyy') : '',
// 			time,
// 		};
// 		console.log(details);
// 		toast.success('Searching for tables...', {
// 			description: `${people} people · ${details.date} · ${time}`,
// 		});

// 		// Reset form fields
// 		setPeople('2');
// 		setDate(new Date());
// 		setTime('7:00pm');
// 	};

// 	return (
// 		<section id="reservations" className="relative bg-background">
// 			<div className="flex flex-col md:flex-row h-[600px]">
// 				{/* Form Column */}
// 				<div className="w-full md:w-3/8 flex items-center justify-center py-12 px-4 md:px-8">
// 					<div className="w-full max-w-xs">
// 						<h2 className="text-center">Make a Reservation</h2>
// 						<form
// 							onSubmit={handleSubmit}
// 							className="space-y-4"
// 							aria-labelledby="reservation-heading"
// 						>
// 							{/* People Select */}
// 							<div className="space-y-2">
// 								<label htmlFor="people-select" className="sr-only">
// 									Number of People
// 								</label>
// 								<Select value={people} onValueChange={setPeople} name="people">
// 									<SelectTrigger
// 										id="people-select"
// 										className="h-12 w-full bg-white border-secondary"
// 									>
// 										<SelectValue placeholder="Number of People" />
// 									</SelectTrigger>
// 									<SelectContent>
// 										{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
// 											<SelectItem key={num} value={num.toString()}>
// 												{num} {num === 1 ? 'person' : 'people'}
// 											</SelectItem>
// 										))}
// 									</SelectContent>
// 								</Select>
// 							</div>

// 							{/* Date Picker */}
// 							<div className="space-y-2">
// 								<label htmlFor="date-picker" className="sr-only">
// 									Select Date
// 								</label>
// 								<Popover>
// 									<PopoverTrigger asChild>
// 										<Button
// 											variant="outline"
// 											id="date-picker"
// 											className="w-full justify-center h-12"
// 											aria-label="Select date"
// 										>
// 											{date ? format(date, 'MMM dd, yyyy') : 'Select date'}
// 											<CalendarIcon className="ml-2 h-4 w-4" />
// 										</Button>
// 									</PopoverTrigger>
// 									<PopoverContent className="w-auto p-0">
// 										<Calendar
// 											mode="single"
// 											selected={date}
// 											onSelect={(newDate) => setDate(newDate)}
// 											initialFocus
// 										/>
// 									</PopoverContent>
// 								</Popover>
// 							</div>

// 							{/* Time Select */}
// 							<div className="space-y-2">
// 								<label htmlFor="time-select" className="sr-only">
// 									Select Time
// 								</label>
// 								<Select value={time} onValueChange={setTime} name="time">
// 									<SelectTrigger
// 										id="time-select"
// 										className="h-12 w-full bg-white border-secondary"
// 									>
// 										<SelectValue placeholder="Select time" />
// 									</SelectTrigger>
// 									<SelectContent>
// 										{[
// 											'5:00pm',
// 											'5:30pm',
// 											'6:00pm',
// 											'6:30pm',
// 											'7:00pm',
// 											'7:30pm',
// 											'8:00pm',
// 											'8:30pm',
// 											'9:00pm',
// 										].map((t) => (
// 											<SelectItem key={t} value={t}>
// 												{t}
// 											</SelectItem>
// 										))}
// 									</SelectContent>
// 								</Select>
// 							</div>

// 							<Button type="submit" className="w-full h-12 uppercase">
// 								Find a Table
// 							</Button>
// 						</form>
// 					</div>
// 				</div>

// 				{/* Image Column */}
// 				<div className="md:w-5/8 h-full relative">
// 					<Image
// 						src="/assets/MAG-Salmon_Anjali Pinto.jpg"
// 						alt="Salmon dish by Anjali Pinto"
// 						fill
// 						className="rounded-lg shadow-xl object-cover"
// 						priority
// 					/>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from 'sonner';
import { format, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import {
	useLocation,
	locationData,
} from '@/components/context/LocationContext';

export default function Reservations() {
	const { location } = useLocation();
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [people, setPeople] = useState('2');
	const [time, setTime] = useState('7:00pm');
	const [timeSlots, setTimeSlots] = useState<string[]>([]);

	// Generate time slots based on location hours
	useEffect(() => {
		const locationHours = locationData[location].hours;
		// Get opening and closing times for the current day of week
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [_, timeRange] = locationHours[0];
		const [openTime, closeTime] = timeRange.split(' - ');

		// Parse the opening and closing times
		const startTime = parse(openTime, 'h:mma', new Date());
		const endTime = parse(closeTime, 'h:mma', new Date());

		// Generate time slots in 30-minute increments
		const slots: string[] = [];
		const currentTime = new Date(startTime);

		while (currentTime < endTime) {
			slots.push(format(currentTime, 'h:mma'));
			// Add 30 minutes
			currentTime.setMinutes(currentTime.getMinutes() + 30);
		}

		setTimeSlots(slots);

		// Set default time to the first available slot
		if (slots.length > 0 && !slots.includes(time)) {
			setTime(slots[0]);
		}
	}, [location, time]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const details = {
			people,
			date: date ? format(date, 'MMM dd, yyyy') : '',
			time,
		};
		console.log(details);
		toast.success('Searching for tables...', {
			description: `${people} people · ${details.date} · ${time}`,
		});

		// Reset form fields after submission
		setPeople('2');
		setDate(new Date());
		setTime(timeSlots.length > 0 ? timeSlots[0] : '7:00pm');
	};

	return (
		<section id="reservations" className="relative bg-background">
			<div className="flex flex-col md:flex-row h-[600px]">
				{/* Form Column */}
				<div className="w-full md:w-3/8 flex items-center justify-center py-12 px-4 md:px-8">
					<div className="w-full max-w-xs">
						<h2 className="text-center">Make a Reservation</h2>
						<form
							onSubmit={handleSubmit}
							className="space-y-4"
							aria-labelledby="reservation-heading"
						>
							{/* People Select */}
							<div className="space-y-2">
								<label htmlFor="people-select" className="sr-only">
									Number of People
								</label>
								<Select value={people} onValueChange={setPeople} name="people">
									<SelectTrigger
										id="people-select"
										className="h-12 w-full bg-white border-secondary"
									>
										<SelectValue placeholder="Number of People" />
									</SelectTrigger>
									<SelectContent>
										{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
											<SelectItem key={num} value={num.toString()}>
												{num} {num === 1 ? 'person' : 'people'}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							{/* Date Picker */}
							<div className="space-y-2">
								<label htmlFor="date-picker" className="sr-only">
									Select Date
								</label>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant="outline"
											id="date-picker"
											className="w-full justify-center h-12"
											aria-label="Select date"
										>
											{date ? format(date, 'MMM dd, yyyy') : 'Select date'}
											<CalendarIcon className="ml-2 h-4 w-4" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar
											mode="single"
											selected={date}
											onSelect={(newDate) => setDate(newDate)}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</div>

							{/* Time Select */}
							<div className="space-y-2">
								<label htmlFor="time-select" className="sr-only">
									Select Time
								</label>
								<Select value={time} onValueChange={setTime} name="time">
									<SelectTrigger
										id="time-select"
										className="h-12 w-full bg-white border-secondary"
									>
										<SelectValue placeholder="Select time" />
									</SelectTrigger>
									<SelectContent>
										{timeSlots.map((t) => (
											<SelectItem key={t} value={t}>
												{t}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<Button type="submit" className="w-full h-12 uppercase">
								Find a Table
							</Button>
						</form>
					</div>
				</div>

				{/* Image Column */}
				<div className="md:w-5/8 h-full relative">
					<Image
						src="/assets/MAG-Salmon_Anjali Pinto.jpg"
						alt="Salmon dish by Anjali Pinto"
						fill
						className="rounded-lg shadow-xl object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
