import '@/styles/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hiconvos | A free public chat messenger.',
	description: 'A free public chat messenger.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					showOptionalFields: false
				}
			}}
		>
			<html lang='en'>
				<body className={cn('relative antialiased', inter.className)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
