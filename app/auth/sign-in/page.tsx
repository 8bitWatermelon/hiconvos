import Link from 'next/link';
import SignInButtons from './sign-in-buttons';

export default function Page() {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold md:text-4xl'>Sign in</h1>
      <p className='text-sm text-muted-foreground'>
        Welcome back, sign into your account to start chatting.
      </p>
      <SignInButtons />
      <p className='text-sm text-muted-foreground'>
        By signing in you agree to the{' '}
        <Link
          href={'/terms-and-conditions'}
          className='text-green-600'
        >
          Terms and conditions
        </Link>{' '}
        of hiConvos.
      </p>
    </div>
  );
}
