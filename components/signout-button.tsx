'use client';

import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <Button
      role='sign out button'
      type='button'
      onClick={() => signOut()}
      variant={'outline'}
      size={'icon'}
    >
      <LogOut size={20} />
      <span className='sr-only'>sign out</span>
    </Button>
  );
}
