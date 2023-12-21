import FriendRequestForm from '@/components/logic/friend-request-form';

export default async function Page() {
  return (
    <div className='px-24 pt-6'>
      <h1 className='text-2xl font-bold md:text-4xl'>
        Add new friends, &amp; family.
      </h1>
      <FriendRequestForm />
    </div>
  );
}
