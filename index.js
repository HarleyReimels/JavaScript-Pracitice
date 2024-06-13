// TODO: Connect the main game mechanics to the wheel
// TODO: Create an HTML page to link and display the game to the user


// Define variables
const prompt = require("prompt-sync")();
const wheel = ["🍪","🍩","🍌","🍒","🍄","🌼","🧋"]
const wheelSize = 3
let money = 0


// How much money the user wants to put in
function deposit(){
    while (true){
        const depositAmount = prompt("Please enter a deposit amount: ");
        if (depositAmount <= 0)
            console.log("Please enter a value greater than 0");
        else{
            return depositAmount;
        }
    }
}

// User can choose to bet on 1-3 lines, horizontally. (1 - Middle) (2 - Middle / Top) (3 - All rows)
function lines(){
    while (true){
        const lines = prompt("Please enter how many lines to bet on 1-3: ");
        if (lines <= 0 || lines > 3 )
            console.log("Please enter a value 1-3");
        else{
            return lines;
        }
    }
}

// Each line can be take a universal bet, if the user has enough in their account
function bet(lines, money){
    while (true){
        const bet = prompt("Please enter how much you would like to bet: ");
        if (bet*lines > money)
            console.log("Please enter a bet smaller than your total money.");
        else{
            return lines;
        }
    }
}

// Returns a random emoji, used to represent the wheel
function wheelspin(){
    return wheel[Math.floor(Math.random() * 7)]
}

// Created 3 emojis, and also addes true or false to the array, depending if all the emojis match
function wheelLine(){
    let row = [wheelspin(), wheelspin(), wheelspin()]
    if (row[0] == row[1] && row[1] == row[2]) {
        row.push(true)
    } else {
        row.push(false)
    }
    return row
}



// Prints the emojis and lets player know if they have won.
function spinWheel(){
    let wheelLineOne = wheelLine()
    let wheelLineTwo = wheelLine()
    let wheelLineThree = wheelLine()

    for (let index = 0; index < wheelSize; index++) {
        process.stdout.write(wheelLineOne[index]);
    }
    console.log();
  
    for (let index = 0; index < wheelSize; index++) {
        process.stdout.write(wheelLineTwo[index]);
    }
    console.log();

    for (let index = 0; index < wheelSize; index++) {
        process.stdout.write(wheelLineThree[index]);
    }
    console.log();

    if (wheelLineOne[3] == true || wheelLineTwo[3] == true ||  wheelLineThree[3] == true){
        console.log("Congratulations you are a winner!")
    }
}

// Game loop
while (true) {
    let again = prompt("Would you like to spin the wheel (Y/y): ")
    
    if (again === "y" || again === "Y") {
        spinWheel()
    }
    else{
        return
    }
}
