import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmeStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "who would you like to talk to",
            choices: ["self", "student"]
        });
        if (ans.select == "self") {
            console.log("i am talking to myself");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student do you want to talk to"
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                //making object of new student
                const name = new Student(ans.student);
                //push new student object into addstudent array
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}, and i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I am ${student.name}, and i am already present`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programmeStart(persons);
