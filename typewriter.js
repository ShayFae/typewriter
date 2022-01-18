const sentence = "hello there from lighthouse labs";
let x = 500
let u = sentence.split('')

for(let i = 0; i < u.length; i++) {
x++
// console.log(x)
  setTimeout(() => {
    process.stdout.write(u[i]);
    // process.stdout.write('\n');
  },x += 100);
};