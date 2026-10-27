import { execSync } from 'node:child_process';

function git(cmd: string): string | null {
  try {
    return execSync(`git ${cmd}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || null;
  } catch {
    return null;
  }
}

// Shown in the footer. Falls back gracefully before the first commit.
export const build = {
  sha: git('rev-parse --short HEAD'),
  date: new Date().toISOString().slice(0, 10),
  repo: 'https://github.com/MatthewMacri/matthewmacri.ca',
};
