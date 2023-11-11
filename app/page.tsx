import {
	SignInButton,
	SignOutButton,
	SignUpButton,
	SignedIn,
	SignedOut,
} from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import UserProfile from '@/components/user-profile';

export default function Home() {
	return (
		<main>
			<section className='p-6 space-y-4'>
				<h1 className='text-3xl font-bold'>Welcome to Hiconvos. 👋</h1>
				<SignedOut>
					<div className='space-x-2'>

					<SignInButton>
						<Button
							type='button'
							variant={'outline'}
						>
							Sign in
						</Button>
					</SignInButton>
					<SignUpButton>
						<Button
							type='button'
							variant={'secondary'}
						>
							Sign up
						</Button>
					</SignUpButton>
					</div>

				</SignedOut>
				<SignedIn>
					<SignOutButton>
						<Button>Sign out</Button>
					</SignOutButton>
					<UserProfile />
				</SignedIn>
			</section>
		</main>
	);
}
