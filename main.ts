import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent: the phone's own farewell, in its own
// voice — a life of overheating and too many tabs, ending unsaved.
// Tightened the middle ("absolutely" earned nothing) and added a final
// beat aimed at the charger that never arrived, so the joke lands twice
// and the last words are the punch.
const LINE =
  "Tell my owner I died the way I lived: at 1%, overheating, with 214 tabs open and nothing saved. Goodbye, cruel charger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
