import { Inngest } from "inngest";
import { env } from "../../lib/env.js";
export const inngest = new Inngest({ id: "code-panel", signingKey: env.INNGEST_SIGNING_KEY }) 