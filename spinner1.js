let delay = 0;
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 100 + delay);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 300) + delay;

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 500 + delay);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, 700 + delay);

  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 900 + delay);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 1100 + delay);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 1300 + delay);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, 1500 + delay);

  delay += 1600;
}
