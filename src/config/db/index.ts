import { createClient } from "redis";

const connectRedisClient = async () => {
  try {
    const redis = createClient({
      password: "penkelemes",
      socket: {
        host: "redis-12216.c11.us-east-1-2.ec2.cloud.redislabs.com",
        port: 12216,
      },
    });

    await redis.connect();

    console.log("connecting to db");
  } catch (err) {
    console.log("err: ", err?.message);
  }
};

export { connectRedisClient };
