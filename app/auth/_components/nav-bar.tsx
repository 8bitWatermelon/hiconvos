import Link from 'next/link';

export default function NavBar() {
  return (
    <header>
      <nav className='py-6'>
        <Link
          href={'/'}
          className='text-2xl font-bold md:text-4xl'
        >
          hiConvos
        </Link>
      </nav>
    </header>
  );
}
