import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter';
import { rdb } from '@/lib/redis';
import { User } from '@/types';

export const options = {
  adapter: UpstashRedisAdapter(rdb),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      const _user = (await rdb.get(`user:${account?.userId}`)) as User | null;

      if (!_user) {
        token.access_token = account?.access_token;
        token.id = account?.userId as string;
        return token;
      }

      return {
        id: _user.id,
        name: _user.name,
        email: _user.email,
        picture: _user.image,
      };
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    redirect() {
      return '/chat';
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
