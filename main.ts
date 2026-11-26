// entry.txt: one funny line, any topic, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Final cut: cut "once" and "anything" so the last phrase carries the joke
// without a spare word in front of it.
const LINE =
  "My dog has a better credit score than I do, and he earned it: he has never " +
  "signed up for a free trial.";

// 102 characters; the gate allows 1 to 200.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
