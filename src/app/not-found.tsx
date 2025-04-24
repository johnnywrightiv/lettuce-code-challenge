import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
	return (
		<div className="flex justify-center">
			<div>
				<h1>404 Page Not Found</h1>
				<div className="mb-8 mt-4 flex justify-center">
					<Button size="lg" variant="outline" asChild>
						<Link href="/">Back to Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
