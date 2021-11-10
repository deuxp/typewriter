// const sentence = "hello there from lighthouse labs";
const sentence = "my name is forrest, forrest gump";
// const sentence = "hheeeelllllllp meeeeeeeeeeeeeeeeee";


const typewriter = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    delay += 50;
    setTimeout(() => {process.stdout.write(char)}, delay);
  }
  process.stdout.write('\n');
}

typewriter(sentence);