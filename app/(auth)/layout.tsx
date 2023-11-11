import React from 'react';

type Props = { children: React.ReactNode };

export default function AuthenticationLayout({ children }: Props) {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen'>
			{children}
		</main>
	);
}
