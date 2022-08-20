attempts=5 // количество попыток 

outer: while (attempts!=0){
let correct=0; // количество цифр на своих местах
let notOnTheGround=0; // количество цифр не на своих местах
let str_correct=""; // какие числа на своих местах
let str_notOnTheGround=""; // какие числа не на своих местах
const readline = require('readline-sync');  // библиотека

randomNumbers = String(Math.floor(Math.random() * 10**6) + 10**2); // компьютер выбирает рандомные числа
console.log(`The computer made a wish ${randomNumbers.toString().length} numbers`);  // говорим игроку сколько чисел было загадано

let number=String(readline.question("Enter your numbers ")); // игрок вводит свои цифры

// проверяем было ли введено верное количество цифр
while(randomNumbers.toString().length!==number.toString().length) {
console.log("You entered the wrong number of numbers");
number=readline.question("Enter your numbers ");
}


// просчитываем какие цифры игрок угадал
for (let i = 0; i<randomNumbers.toString().length;i++){
	for (let j=0; j<number.toString().length;j++){
    // какие цифры были на своих местах
		if (str_correct.indexOf(String(randomNumbers[i]))==-1){
		if ((randomNumbers[i]==number[j]) && (i==j)){
			correct++;
			str_correct=str_correct+randomNumbers[i] + " и ";
		
		}
		if (str_notOnTheGround.indexOf(String(randomNumbers[i]))==-1){
        // какие цифры не были на своих местах
		 if (randomNumbers[i]==number[j] && (i!=j)){
			notOnTheGround++;
			str_notOnTheGround=str_notOnTheGround+randomNumbers[i] + " и "
						}
					}
				}
			}
		}
str_correct=str_correct.slice(0, -3);
str_notOnTheGround=str_notOnTheGround.slice(0, -3);
console.log(`Matching numbers are out of place - ${notOnTheGround} (${str_notOnTheGround}), the numbers are in their places - ${correct} (${str_correct})`);

// если игрок угадывает все цифры
if (randomNumbers==number) {
	console.log("Congratulations! You guessed all the numbers!")
        break outer;
  }

}