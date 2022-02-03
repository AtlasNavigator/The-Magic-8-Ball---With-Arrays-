const readLine = require('readline-sync'); //readLine-sync package

let possibilities = ["As I see it, yes", "It is certain", "It is decidedly so", "Most likely", "Outlook good", "Signs point to yes", "Without a doubt", "Yes", "Yes - definitely", "You may rely on it", "Reply hazy, try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]; // List of possible outputs for the 8 ball

let possibilitiesSpanish = ["Como yo lo veo, sí", "Es cierto", "Es decididamente así", "Lo más probable", "Perspectiva buena", "Las señales apuntan a que sí", "Sin lugar a dudas", "Sí", "Sí, definitivamente", "Puede confiar en ello", "Responder confuso, intentarlo de nuevo", "Preguntar de nuevo más tarde", "Mejor no decirte ahora", "No puedo predecir ahora", "Concentrarte y preguntar de nuevo", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes dicen que no", "Perspectivas no tan buenas", "Muy dudoso"]; //Spanish Array
// The random generator choosing items from the array above
let randomChoice = possibilities[Math.floor(Math.random(19)*possibilities.length)];
let randomChoiceESP = possibilitiesSpanish[Math.floor(Math.random(19)*possibilitiesSpanish.length)]; //Spanish
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
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀™ `);
let language = readLine.question('English or Español (1/2) ');
if (language == '1'){
  console.clear();
  sleep(500).then(() => {
  english();
});
  
} else if (language == '2') {
  console.clear();
  sleep(500).then(() => {
  spanish();
});
}else
console.clear();
console.log(`Please input 1 or 2 for language. Porfavor ponga 1 o 2 correspondiendo con su lenguaje.`);
console.log(`Please try again. Porfavor intente de nuevo.`)
  sleep(3000).then(() => {
  console.clear();
  magic8Ball();
  });
};

function english(){ //8 ball in English
console.log(` Welcome to:
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀™ `);
let name= (readLine.question('What is your name: ')); //First question asking input
let question= (readLine.question(`Hello ${name}, what is your question: `));
console.clear(); //Clear the console
console.log(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀™`);
console.log('Please await your answer...')
sleep(2000).then(() => {
  console.log(randomChoice);
  sleep(500).then(() => {
  console.log(`Thank you for participating, ${name}, have a lovely day! :D`);
});
}); //Pause the code for 2 seconds and then log the following text to the console.
}

function spanish(){ //8 ball in Spanish
console.log(` Bienvenidos a:
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀™ `);
let name= (readLine.question('Cómo te llamas: ')); //First question asking input
let question= (readLine.question(`Hola ${name}, ¿cuál es tu pregunta?: `));
console.clear(); //Clear the console
console.log(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█░▄▄▀█░▄▄▄██▄██▀▄▀███▀▄▄▀████░▄▄▀█░▄▄▀█░██░█
██░█░█░█░▀▀░█░█▄▀██░▄█░█▀███▀▄▄▀████░▄▄▀█░▀▀░█░██░█
██░███░█▄██▄█▄▄▄▄█▄▄▄██▄████▄▀▀▄████░▀▀░█▄██▄█▄▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀™`);
console.log('Por favor, espere su respuesta...')
sleep(2000).then(() => {
  console.log(randomChoiceESP);
  sleep(500).then(() => {
  console.log(`Gracias por participar, ${name}, espero que tengas un buen dia. :D`);
});
}); //Pause the code for 2 seconds and then log the following text to the console.
}

magic8Ball(); //Execute the magic 8 ball script