import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation, Location } from '@/components/context/LocationContext';

const LocationSelector = () => {
	const { setLocation } = useLocation();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="link"
					className="text-xs uppercase px-0 h-auto hover:cursor-pointer"
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
