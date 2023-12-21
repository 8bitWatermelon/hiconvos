import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import NavBar from './_components/nav-bar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hiConvos | Authentication',
  description: 'Authenticate yourself with hiConvos.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen',
        inter.className
      )}
    >
      <NavBar />
      <div className='flex-1 mt-28'>{children}</div>
    </main>
  );
}
