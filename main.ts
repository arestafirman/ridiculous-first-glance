// Ridiculous at First Glance, Real by the Second — Make.fun entry
// One-sentence startup pitch: a bizarre idea that is a real business.
// The pitch: rent out other people's empty driveways by the hour to
// delivery drivers who need a legal place to cry between drops.
// Bizarre on its face, real underneath: drivers need a legal place to
// park and rest, owners hold an empty asset, and both sides pay by the hour.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We rent out other people's empty driveways by the hour to delivery drivers who need a legal place to cry between drops.";

// Gate guard: the entry must be exactly one sentence, 1–200 characters,
// one line, no trailing newline — fail loudly instead of shipping a bad entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  (ENTRY.match(/\./g) ?? []).length !== 1
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
