import { cookies } from "next/headers";

const COOKIE_NAME = "rb_session";

/**
 * Haalt de anonieme sessiesleutel op (geen login). Maakt er een aan als die
 * nog niet bestaat. Gebruikt in server components en route handlers.
 */
export async function getSessionKey(): Promise<string> {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;
  if (existing) return existing;
  const key = crypto.randomUUID();
  // In Server Components kan schrijven falen; daarom try/catch.
  try {
    store.set(COOKIE_NAME, key, {
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  } catch {
    /* read-only context: cookie wordt gezet via middleware */
  }
  return key;
}

export const SESSION_COOKIE_NAME = COOKIE_NAME;
