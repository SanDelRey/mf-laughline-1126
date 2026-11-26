// entry.txt: one funny line, any topic, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Set up the dog's better credit rating, then turn it: the dog has
// never signed up for anything, which is the whole discipline.
const LINE =
  "My dog has a better credit score than I do, and he earned it: not once " +
  "has he bought a subscription he forgot to cancel.";

// 120 characters; the gate allows 1 to 200.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
