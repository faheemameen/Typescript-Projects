import inquirer from 'inquirer';

let todos:string[]=["faheem","asfand","yar","bobby"];


async function createTodo(arr:string[]){
    do{
        let ans = await inquirer.prompt({
            type:"list",
            message:"Please select the choice",
            name:"select",
            choices:["add","update","view","delete"]
        })
        if (ans.select == "add"){
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"add item..",
                name:"todo"
            })
            todos.push(addTodo.todo);
            console.log(todos);
        
        }
        if (ans.select == "update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message:"select item for update",
                name:"todo",
                choices:todos.map(item=>item)
            })
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"add item..",
                name:"todo"
            })
            let newTodos = todos.filter(item => item !== updateTodo.todo);
            todos = [...newTodos,addTodo.todo];
            console.log(todos);
        
        }
        if (ans.select == "view"){
            console.log(todos);
        }
        if (ans.select == "delete"){
            let deleteTodo = await inquirer.prompt({
                type:"list",
                message:"select item for delete",
                name:"todo",
                choices:todos.map(item=>item)
            })
            let newTodos = todos.filter(item=> item !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        }
    
    while(true)
}


createTodo(todos);