'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Location = 'Chicago' | 'Bethesda' | 'Las Vegas';

export const locationData: Record<
  Location,
  {
    email: string;
    phone: string;
    address: string;
    hours: [string, string][];
  }
> = {
  Chicago: {
    email: 'info@monamigabi.com',
    phone: '773.348.8886',
    address: '2300 N. Lincoln Park West, Chicago, IL 60614',
    hours: [
      ['Mon - Thu', '5:00pm - 9:30pm'],
      ['Fri - Sat', '5:00pm - 10:30pm'],
      ['Sun Brunch', '10:00am - 2:00pm'],
      ['Sunday', '5:00pm - 8:30pm'],
    ],
  },
  Bethesda: {
    email: 'bethesda@monamigabi.com',
    phone: '301.654.1234',
    address: '123 Bethesda Row, Bethesda, MD 20814',
    hours: [
      ['Mon - Thu', '5:00pm - 9:00pm'],
      ['Fri - Sat', '5:00pm - 10:00pm'],
      ['Sunday', '5:00pm - 8:00pm'],
    ],
  },
  'Las Vegas': {
    email: 'vegas@monamigabi.com',
    phone: '702.944.4224',
    address: '3655 Las Vegas Blvd S, Las Vegas, NV 89109',
    hours: [['Daily', '11:00am - 11:00pm']],
  },
};

interface LocationContextType {
  location: Location;
  setLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location>('Chicago');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
