import inquirer from "inquirer";
//by normal function
function counter(text) {
    let freeWhiteSpace = text.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
//by arrow function
const counter1 = (para) => para.replace(/\s/g, "").length;
async function wordCount(count) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            name: "paragraph",
            message: "Write paragraph here..."
        });
        console.log(counter1(res.paragraph));
    } while (true);
}
wordCount(counter1);
