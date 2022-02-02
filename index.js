const readLine = require('readline-sync'); //readLine-sync

let possibilities = ["As I see it, yes", "It is certain", "It is decidedly so", "Most likely", "Outlook good", "Signs point to yes", "Without a doubt", "Yes", "Yes - definitely", "You may rely on it", "Reply hazy, try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]; // List of possible outputs

// The random generator choosing items from the array above
let randomChoice = possibilities[Math.floor(Math.random(19)*possibilities.length)];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
function magic8Ball(){
  console.log(` Welcome to:
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ `);
let name= (readLine.question('What is your name: '));
let question= (readLine.question(`Hello ${name}, what is your question: `));
console.clear();
console.log(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`);
console.log('Please await your answer...')
sleep(2000).then(() => {
  console.log(randomChoice);
})
};


magic8Ball();