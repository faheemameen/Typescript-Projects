class School{
    name:string

    students:Student[]= []
    teachers:Teacher[]= []

    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }

    addTeacher(teacherObj:Teacher){
        this.teachers.push(teacherObj)
    }

    constructor(name:string){
        this.name = name
    }
}

class Student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName =schoolName
    }
}

class Teacher extends Student {
    email:string="";
    contact:string="";
    addInfo(email:string,contact:string){
        this.email =email
        this.contact = contact
    }
}

//Making School Object
let school1 = new School("Allied")
let school2 = new School("City")

//Making student object
const student1 = new Student("faheem",14,school1.name)
const student2 = new Student("ahmad",16,school2.name)
const student3 = new Student("raza",15,school1.name)

//Making teacher object
const teacher1 = new Teacher("aslam",40,school1.name)
const teacher2 = new Teacher("zia",35,school2.name)
const teacher3 = new Teacher("asfand",50,school1.name)

teacher1.addInfo("abc@test.com","0345-6089121")
teacher2.addInfo("abc@gmail.com","0311-6012134")
teacher3.addInfo("abc@hotmail.com","0323-3459121")

//add student to school
school1.addStudent(student1)
school2.addStudent(student2)
school1.addStudent(student3)

//add teacher to school
school1.addTeacher(teacher1)
school2.addTeacher(teacher2)
school1.addTeacher(teacher3)

console.log(school1)
console.log(school2)










