const prompt = require("prompt-sync")();

const username = prompt("What's your name? ");
console.log(`Welcome ${username}`);

const gender = prompt("Choose your gender? male, female, or other ");
if (gender === "male") {
    console.log("You are a male!");
} else if (gender === "female") {
    console.log("You are a female!");
} else {
    console.log("You are non-binary!");
}

const start = prompt("Are you ready to start your adventure? yes or no ");
if (start === "yes") {
    const hunger = prompt("Are you hungry? yes or no ");
    if (hunger === "yes") {
        const location1 = prompt("Do you want to check the house in front of you for food? yes or no ");
        if (location1 === "yes") {
            console.log("You enter the house");
            const table = prompt("Do you see food on the table? yes or no ");
            if (table === "yes") {
                for (let food = 0; food < 6; food++) {
                    console.log("yum");
                }
                console.log("I'm full");
            } else {
                console.log("You fall to the floor from starvation...");
            }
        } else {
            console.log("You faint from starvation...");
        }
    } else {
        console.log("Your stomache growls");
        const snack = prompt("Do you have a snack in your pocket? yes or no ");
        if (snack === "yes") {
            for (let nibble = 0; nibble < 3; nibble++) {
                console.log("chew");
            }
            console.log("I'm not hungry anymore");
        } else {
            console.log("You fall on the grass from starvation");
        }
    }
} else {
    console.log("You are asleep");
}