import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: [
    // All chat routes and sub-sequent routes of chat

    '/chat',
    '/chat/add',

    // All api/trpc routes and sub-sequent routes of api/trpc

    '/(api|trpc)(.*)',
  ],
};
