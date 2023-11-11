import { UserButton, currentUser } from '@clerk/nextjs';

export default async function UserProfile() {
	const user = await currentUser();

	return (
		<div className='px-4 py-2 rounded bg-accent max-w-fit'>
			<div className='flex items-center'>
				<div className='mr-2'>
					<p className='font-medium'>
						{user?.firstName} {user?.lastName}
					</p>
					<p className='text-sm text-muted-foreground leading-tight'>
						{user?.emailAddresses[0].emailAddress}
					</p>
				</div>
				<UserButton afterSignOutUrl='/' />
			</div>
		</div>
	);
}
