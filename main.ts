import fs from "node:fs";
import path from "node:path";

const TEXT = "The doorstop has one job: stay put. It has been kicked, tripped over, and vacuumed into a corner for five years, and it still slides away the moment the door actually needs it.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("review must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
