const animation = [`|`, `/`, `-`, `\\`];
let delay = 0;
for (let i = 0; i < 10; i++) {
  animation.forEach((element) => {
    setTimeout(() => {
      // Need to escape the backslash since it's a special character.
      process.stdout.write(`\r${element}  `);
    }, (delay += 200));
  });
}
