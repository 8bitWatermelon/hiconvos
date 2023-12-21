import Link from 'next/link';

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div className='space-y-4'>
        <h1>HiConvos</h1>
        <Link href={'/auth/sign-in'}>Get started</Link>
      </div>
    </main>
  );
}
