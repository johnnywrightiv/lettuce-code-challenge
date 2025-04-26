import { Metadata } from 'next';
import '@/styles/globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/context/ThemeProvider';
import { LocationProvider } from '@/context/LocationProvider';
import { Outfit, Baskervville } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['300'],
});

const baskervville = Baskervville({
	variable: '--font-baskerville',
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Lettuce Code Challenge',
	description: 'John Wright Submission',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${outfit.variable} ${baskervville.variable} min-h-screen flex flex-col antialiased`}
			>
				<ThemeProvider>
					<LocationProvider>
						<Header />
						<main className="flex-1 flex justify-center items-center">
							{children}
						</main>
						<Footer />
						<Toaster richColors />
					</LocationProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
