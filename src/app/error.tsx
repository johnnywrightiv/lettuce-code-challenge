'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="bg-destructive text-white w-full fixed top-0 mb-2 p-4 text-end space-y-4 mt-30 pt-8">
      <h1>Oops, something went wrong!</h1>
      <p>
        <strong>Error:</strong> {error.message}
      </p>
      <div className="space-x-2">
        <Button variant="default" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="default" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
