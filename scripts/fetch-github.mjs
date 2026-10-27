// Refreshes star counts and last-push dates for public repos linked from project pages.
// Runs before the build; if GitHub is unreachable the committed snapshot is used as-is.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const dir = 'src/content/projects';
const out = 'src/data/github.json';
const repos = readdirSync(dir)
  .map((f) => readFileSync(`${dir}/${f}`, 'utf8').match(/^\s+repo:\s*(\S+)/m)?.[1])
  .filter(Boolean);

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'matthewmacri.ca' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const previous = JSON.parse(readFileSync(out, 'utf8'));
const next = {};
for (const repo of repos) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) throw new Error(`${res.status}`);
    const r = await res.json();
    if (r.private) continue;
    next[repo] = { stars: r.stargazers_count, pushed: r.pushed_at.slice(0, 10), language: r.language };
  } catch (err) {
    console.warn(`github: kept snapshot for ${repo} (${err.message})`);
    if (previous[repo]) next[repo] = previous[repo];
  }
}
writeFileSync(out, JSON.stringify(next, null, 2) + '\n');
console.log(`github: ${Object.keys(next).length} repos`);
