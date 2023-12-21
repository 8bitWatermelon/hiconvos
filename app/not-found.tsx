import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-24'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p>
          Page not found{' '}
          <span className='text-rose-500'>`could not fetch resource`</span>
        </p>

        <Link
          href={'/'}
          className='px-4 py-2 rounded-md hover:bg-gray-200'
        >
          Go to home &rarr;
        </Link>
      </div>
    </main>
  );
}
