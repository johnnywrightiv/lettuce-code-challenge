'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

export default function ThemeToggle(): ReactNode {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const icon =
		theme === 'dark' ? (
			<IoMdMoon className="h-5 w-5" />
		) : (
			<IoMdSunny className="h-5 w-5" />
		);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="hover:scale-110 hover:text-secondary -ml-2"
			>
				<Button
					variant="link"
					size="icon"
					className="hover:cursor-pointer"
					aria-label="Toggle theme"
				>
					{icon}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
