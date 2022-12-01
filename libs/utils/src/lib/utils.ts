import { NextPath } from "@funnel/api-interfaces";

export function utils(): string {
  return 'utils';
}

export async function getNextPath(): Promise<NextPath> {
  const res  = await fetch('/api/next', {
    method: 'POST',
    body: JSON.stringify({currentPath: window.location.pathname}),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}
