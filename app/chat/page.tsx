import { Button } from '@/components/ui/button';
import SignOutButton from '@/components/signout-button';

export default function Page() {
  return (
    <div className='p-24 space-y-4'>
      <h1>Welcome to the chat interface</h1>
      <Button>Add friend</Button>

      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
