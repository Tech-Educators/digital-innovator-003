export let count = 25;

export function increaseCount() {
  console.log("counter.js", count);
  return count++;
}
