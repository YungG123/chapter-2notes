const readline = require('readline-sync');

// let y = 0;
// while (y < 25){
//     y++;
//     console.log(y)
// }

// let y =  0;
// while(y <50){
//     y++;
//     console.log(y);
//}

// let y = -10
// while (y <10){
//     y++;
//     console.log(y);
// }

// let y = 1;
// while(y > -50){
//     y--;
//     console.log(y)
//}

let start = 0;
while (start <= 100){
    if (start < 10){
        console.log(start);
    } else if (start > 25){
        console.log(start);
    }
    start++;
}
//
// let answer = readline.question(" Enter y or n:");
// while (answer != "y" && answer != "n" && answer !="quit"){
//     console.log("invalid choice.")
//     answer = readline.question(" Enter y or n: ");
// }
// console.log("rest of program");