import fetch from 'node-fetch';
import FormData from 'form-data';

async function test() {
  try {
    // We cannot easily test this because the route uses clerkMiddleware and requires a valid JWT from Clerk.
    // So we can't easily script a test without a valid token.
    console.log("Cannot test without Clerk JWT");
  } catch (err) {
    console.error(err);
  }
}
test();
