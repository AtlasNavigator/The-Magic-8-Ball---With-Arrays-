const readLine = require('readline-sync'); //readLine-sync package

let possibilities = ["As I see it, yes", "It is certain", "It is decidedly so", "Most likely", "Outlook good", "Signs point to yes", "Without a doubt", "Yes", "Yes - definitely", "You may rely on it", "Reply hazy, try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]; // List of possible outputs for the 8 ball

// The random generator choosing items from the array above
let randomChoice = possibilities[Math.floor(Math.random(19)*possibilities.length)];
// Randomly pick an output for the 8 ball off of the list

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}; //Allows the code to pause, with promisies, of course.
function magic8Ball(){
  console.log(` Welcome to:
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ `);
let name= (readLine.question('What is your name: ')); //First question asking input
let question= (readLine.question(`Hello ${name}, what is your question: `));
console.clear(); //Clear the console
console.log(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`);
console.log('Please await your answer...')
sleep(2000).then(() => {
  console.log(randomChoice);
  sleep(500).then(() => {
  console.log(`Thank you for participating, ${name}, have a lovely day! :D`);
});
}); //Pause the code for 2 seconds and then log the following text to the console.
};

magic8Ball(); //Execute the magic 8 ball script