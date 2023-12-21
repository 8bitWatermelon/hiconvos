import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div className='space-y-4'>
        <h1 className='text-2xl font-bold md:text-4xl'>Welcome to HiConvos</h1>
        <Link
          href={'/auth/sign-in'}
          className={buttonVariants({ variant: 'brand' })}
        >
          Get started 👍
        </Link>
      </div>
    </main>
  );
}
