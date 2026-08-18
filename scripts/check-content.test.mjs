import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { findRepositoryRoot } from "./check-content.mjs";

test("finds the repository root without local agent files", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "content-root-"));
  const nested = path.join(root, "2026.2", "aula-00", "slides");
  t.after(() => rm(root, { recursive: true, force: true }));

  await mkdir(nested, { recursive: true });
  await writeFile(path.join(root, "course.config.json"), "{}\n");
  await writeFile(path.join(root, "course.config.schema.json"), "{}\n");

  assert.equal(await findRepositoryRoot(nested), root);
});
