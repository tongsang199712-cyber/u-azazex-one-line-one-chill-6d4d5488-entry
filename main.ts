// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes a single sentence of horror to /output/entry.txt.
// Node 22+, no dependencies.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "The dentist found a tooth that wasn't mine growing behind my molars, and when he pulled it free, it whispered the nickname only my mother used before she died.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// Gate (per RULES.txt): UTF-8 text of 1 to 200 characters, not only whitespace, single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`gate failed: line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("gate failed: line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("gate failed: line must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
chmodSync(OUTPUT_PATH, 0o644);

console.log(`wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
