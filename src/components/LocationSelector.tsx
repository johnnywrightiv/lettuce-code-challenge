import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation, Location } from '@/context/LocationProvider';
import clsx from 'clsx';

const LocationSelector = ({ className = '' }) => {
	const { setLocation } = useLocation();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="link"
					className={clsx(
						'text-xs uppercase px-0 h-auto hover:cursor-pointer hover:text-secondary',
						className
					)}
					aria-label="Change location"
				>
					Change Location
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{['Bethesda', 'Chicago', 'Las Vegas'].map((loc) => (
					<DropdownMenuItem
						key={loc}
						onClick={() => setLocation(loc as Location)}
					>
						{loc}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LocationSelector;
