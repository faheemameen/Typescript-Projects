import { differenceInSeconds } from "date-fns";
import inquirer  from "inquirer";

const resp = await inquirer.prompt({
    type:"number",
    name:"userInput",
    message:"Please enter the amount of second:",
    validate:(input)=>{
        if(isNaN(input)){
            return "Please enter valid number"
        }else if(input > 60){
            return "Second must must be less than 60"
        }else{
            return true;
        }
    }

})

let input = resp.userInput;

function startCounter(val:number){
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervaltime = new Date(initialTime);
    console.log(intervaltime);
    setInterval(()=>{
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervaltime,currentTime);
        console.log(timeDifference);
        if(timeDifference <= 0){
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24))/3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`);
    },1000)
}

startCounter(input);