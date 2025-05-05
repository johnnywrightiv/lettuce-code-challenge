import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  useLocation,
  locationData,
  Location,
} from '@/context/LocationProvider';
import clsx from 'clsx';

const LocationSelector = ({ className = '' }) => {
  const { setLocation } = useLocation();
  const availableLocations = Object.keys(locationData) as Location[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className={clsx(
            'text-xs uppercase px-0 h-auto hover:cursor-pointer hover:text-secondary pr-4',
            className
          )}
          aria-label="Change location"
        >
          Change Location
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocations.map((loc) => (
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
