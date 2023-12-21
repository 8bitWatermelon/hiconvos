'use client';

import { Button } from '@/components/ui/button';
import GithubIcon from '@/public/assets/github-icon.svg';
import GoogleIcon from '@/public/assets/google-icon.svg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function SignInButtons() {
  return (
    <div className='flex flex-col space-y-4'>
      <Button
        role='sign-in-button'
        type='button'
        variant={'outline'}
        onClick={() => signIn('google')}
      >
        <Image
          src={GoogleIcon}
          alt='Google icon imagery'
          width={20}
          height={20}
        />
        <p className='ml-2'>Google</p>
      </Button>
      <Button
        role='sign-in-button'
        type='button'
        variant={'outline'}
        onClick={() => signIn('github')}
      >
        <Image
          src={GithubIcon}
          alt='Github icon imagery'
          width={20}
          height={20}
        />
        <p className='ml-2'>Github</p>
      </Button>
    </div>
  );
}
