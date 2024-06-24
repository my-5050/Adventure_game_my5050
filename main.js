import inquirer from "inquirer";
//''''''''''''''''''''''''''''''''enemy detail''''''''''''''''''''''''''''''''''''''''
let enemies = ["Skeleton", "granny", "Mr'Meet", "Assasin"];
let maxenemyhealth = 75;
let enemy_attakdemagetohero = 25;
// ''''''''''''''''''''''''''''''''hero detail'''''''''''''''''''''''''''''''''''''''
let maxherohealth = 100;
let hero_attackdemagetoenemy = 50;
let hero_lives = 3;
let hero_livesfillingamount = 30;
let enemy_death_amount = 50;
//'''''''''''''''''''''''''''''''''''''while loop'''''''''''''''''''''''''''''''''''''
let gamerunning = true;
console.log("Wellcome to zombie's land\n");
game: while (gamerunning) {
    let enemyhealth = Math.floor(Math.random() * maxenemyhealth + 1);
    let enemy_index = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemy_index];
    console.log(`#your ${enemy} is appeared#\n`);
    while (enemyhealth > 0) {
        console.log(`${enemy} health is ${enemyhealth}\n`);
        console.log(`your health is ${maxherohealth}\n`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ["1.Attack", "2.Take health portion", "3.Run"]
        });
        // -------------------------------------1.attack---------------------------------------------
        if (option.ans === "1.Attack") {
            let demagetoenemy = Math.floor(Math.random() * hero_attackdemagetoenemy + 1);
            let demagetohero = Math.floor(Math.random() * enemy_attakdemagetohero + 1);
            enemyhealth -= demagetoenemy;
            maxherohealth -= demagetohero;
            console.log(`You hits the ${enemy} for ${demagetoenemy} demage\n`);
            console.log(`${enemy} hits you for ${demagetohero} demage\n`);
            if (maxherohealth < 1) {
                console.log("You are too much demage to continue !!!!!\n");
                break;
            }
        }
        // -------------------------------2.take health portion---------------------------------------
        else if (option.ans === "2.Take health portion") {
            if (hero_lives > 0) {
                maxherohealth += hero_livesfillingamount;
                let remaining_lives = hero_lives--;
                console.log(`You use your health portion for ${hero_livesfillingamount}\n`);
                console.log(`Now your health is ${maxherohealth}\n`);
                console.log(`Remaining lives ${remaining_lives}\n`);
            }
            else {
                console.log("You have no more lives ,defeat enemy to get chance to earn lives\n");
            }
        }
        // ------------------------------------3.run----------------------------------------------
        else if (option.ans === "3.Run") {
            console.log(`You are runaway from ${enemy}`);
            continue game;
        }
    }
    if (maxherohealth < 1) {
        console.log("You are out from game ,you are to weak\n");
        break;
    }
    console.log(`Your ${enemy} was defeated\n`);
    console.log(`Your health is ${maxherohealth}\n`);
    let randomnumber = Math.floor(Math.random() * 100 + 1);
    if (randomnumber < enemy_death_amount) {
        hero_lives++;
        console.log("You defeat powerfull enemy ,enemy  gives u his health\n");
        console.log(`Now your health is ${maxherohealth}\n`);
        console.log(`You have ${hero_lives} lives\n`);
    }
    let useroption = await inquirer.prompt({
        name: "answer",
        type: "list",
        message: "what would yu like to do ?",
        choices: ["1.CONTINUE", " 2.EXIT"]
    });
    if (useroption.answer === "1.CONTINUE") {
        console.log("You are Continue on your adventure\n");
    }
    else {
        console.log("You are EXIT from ZOMBIE'S_LAND\n");
        break;
    }
    console.log("Thank you for playing\n");
}
