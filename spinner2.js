let time = 0;
let spin = '/-\\|'
let animation = ''
let i = 0;
while (i < 5) {
  for (const char of spin) {
    setTimeout(() => {
      animation = '\r' + char + '   '
      process.stdout.write(animation)
    }, time += 200)
  }
  i++
}
setTimeout(() => {
  console.log();
}, time)