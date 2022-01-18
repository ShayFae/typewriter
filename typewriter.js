const sentence = "hello there from lighthouse labs";
let seconds = 500
let sentenceSplit = sentence.split('')

for(let i = 0; i < sentenceSplit.length; i++) {
  seconds++
// console.log(x)
  setTimeout(() => {
    process.stdout.write(sentenceSplit[i]);   
  },seconds += 100);
};
setTimeout(() => process.stdout.write('\n'), 4000);