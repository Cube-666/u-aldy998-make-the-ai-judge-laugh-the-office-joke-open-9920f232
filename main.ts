// One-line office joke for make.fun's "Make the AI Judge Laugh: the Office Joke Open".
// The program writes exactly one joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The joke: a reply-all storm where asking to leave the thread is what feeds it.
// The payoff lands in the last words ("replied-all to agree"): the complaint about
// reply-all triggers forty more reply-alls. Specific detail, one voice, one read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I replied-all to say 'please remove me from this thread' and 40 people replied-all to agree.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
