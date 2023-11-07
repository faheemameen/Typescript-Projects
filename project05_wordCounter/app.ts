import inquirer from "inquirer";

//by normal function
function counter(text:string){
    let freeWhiteSpace = text.replace(/\s/g,"");
    return freeWhiteSpace.length;
}

//by arrow function
const counter1 = (para:string)=>para.replace(/\s/g,"").length;

async function wordCount(count:(para:string)=>number){
    do{
        let res = await inquirer.prompt({
            type:"input",
            name:"paragraph",
            message:"Write paragraph here..."
    
        })
    console.log(counter1(res.paragraph));

    } while(true)
  
}
 
wordCount(counter1);