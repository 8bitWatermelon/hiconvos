type RedisCommands = 'zrange' | 'sismember' | 'get' | 'smembers';

/**
 * Fetches data without being cached from the redis DB on upstash.
 * Preventing Nextjs Cache mechanism.
 *
 * @param rcommand The desired redis command.
 * @example -> rcommand options: 'zrange' | 'sismember' | 'get' | 'smembers'
 *
 * @param args The keys we would like to fetch from the redis DB.
 * @example -> args array: "/get/user:email:example" ([].join using "/")
 */
export async function redisHelper(
  rcommand: RedisCommands,
  ...args: (string | number)[]
) {
  const NEW_REDIS_FETCH_URL = `${
    process.env.UPSTASH_REDIS_REST_URL
  }/${rcommand}/${args.join('/')}`;

  const response = await fetch(NEW_REDIS_FETCH_URL, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Error => ${response.statusText}`);
  }

  const data = await response.json();

  return data.result;
}
