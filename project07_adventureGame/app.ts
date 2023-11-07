import chalk from "chalk";
import inquirer from "inquirer";

class Player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name
    }
    decreaseFuel(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    increaseFuel(){
        this.fuel = 100;
    }
}

class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name
    }
    decreaseFuel(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
   
}

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter your name"
})

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"select your oppnent",
    choices:["Zombie","skeleton","Assassin"]
})

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    //Skeleton
    if(opponent.select == "skeleton"){
        let ask = await inquirer.prompt({
            type:"list",
            name:"option",
            message:"Please select your option",
            choices:["Attack","Drink for life","Run for your life.."]
        })
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.decreaseFuel();
                console.log(chalk.bold.red(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${(o1.name)} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
                    process.exit();
                }
            }
            if(num <= 0){
                o1.decreaseFuel();
                console.log(chalk.bold.green(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${(o1.name)} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink for life"){
            p1.increaseFuel();
            console.log(chalk.bold.italic.green(`You use health option, now your fuel is ${p1.fuel}`))
        }
        if(ask.option == "Run for your life.."){
            console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
            process.exit();
        }
    }
    
    //for assassin
    if(opponent.select == "Assassin"){
        let ask = await inquirer.prompt({
            type:"list",
            name:"option",
            message:"Please select your option",
            choices:["Attack","Drink for life","Run for your life.."]
        })
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.decreaseFuel();
                console.log(chalk.bold.red(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${(o1.name)} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
                    process.exit();
                }
            }
            if(num <= 0){
                o1.decreaseFuel();
                console.log(chalk.bold.green(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${(o1.name)} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink for life"){
            p1.increaseFuel();
            console.log(chalk.bold.italic.green(`You use health option, now your fuel is ${p1.fuel}`))
        }
        if(ask.option == "Run for your life.."){
            console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
            process.exit();
        }
    }

    //for zombie
    if(opponent.select == "Zombie"){
        let ask = await inquirer.prompt({
            type:"list",
            name:"option",
            message:"Please select your option",
            choices:["Attack","Drink for life","Run for your life.."]
        })
        if(ask.option == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.decreaseFuel();
                console.log(chalk.bold.red(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${(o1.name)} fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
                    process.exit();
                }
            }
            if(num <= 0){
                o1.decreaseFuel();
                console.log(chalk.bold.green(`${(p1.name)} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${(o1.name)} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.green.italic.bold("You Win"));
                    process.exit();
                }
            }
        }
        if(ask.option == "Drink for life"){
            p1.increaseFuel();
            console.log(chalk.bold.italic.green(`You use health option, now your fuel is ${p1.fuel}`))
        }
        if(ask.option == "Run for your life.."){
            console.log(chalk.red.italic.bold("You loose, Better luck for next time"));
            process.exit();
        }
    }

}while(true)








