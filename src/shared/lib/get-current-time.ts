// ToDo: write tests later for this fun
export function getCurrentTime() {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
}
