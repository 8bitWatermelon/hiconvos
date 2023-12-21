import * as z from 'zod';

import { auth } from '../../auth/[...nextauth]/auth-options';
import { rdb } from '@/lib/redis';
import { redisHelper } from '@/utils/redis-helper';

const Email = z.object({
  email: z.string().min(5).max(50).email(),
});

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response(
        'You must be authenticated. Please authenticate yourself.',
        { status: 401 }
      );
    }

    const body = await request.json();

    const { email } = Email.parse({ email: body.email });

    const idFromEmail = (await redisHelper(
      'get',
      `user:email:${email}`
    )) as string;

    const friendID = idFromEmail;

    if (!friendID) {
      return new Response('Email does not exist.', { status: 400 });
    }

    if (friendID === session.user.id) {
      return new Response('You cannot add yourself as a friend.', {
        status: 400,
      });
    }

    const isFriendAlreadyAdded = (await redisHelper(
      'sismember',
      `user:${friendID}:incoming_friend_requests`,
      session.user.id
    )) as true | false;

    if (isFriendAlreadyAdded) {
      return new Response('Already added this user', { status: 400 });
    }

    const isFriends = (await redisHelper(
      'sismember',
      `user:${session.user.id}:friends`,
      friendID
    )) as true | false;

    if (isFriends) {
      return new Response('Already friends with this user', { status: 400 });
    }

    rdb.sadd(`user:${friendID}:incoming_friend_requests`, session.user.id);

    return new Response('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Err: Invalid email payload sent', { status: 422 });
    }

    return new Response('Invalid request, please try again later.', {
      status: 400,
    });
  }
}
