import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: ['/chat', '/(api|trpc)(.*)'],
};
