const readLine = require('readline-sync');

let answer = readLine.question("Do you wanna hear a joke: ");
console.log(answer);
if (answer  == "yes") {
    console.log(` Why did the chicken cross the playground? To get to the other slide! `)
}else{
    console.log("i knew my joke was to funny")
}

//2
let usernumber = readLine.question