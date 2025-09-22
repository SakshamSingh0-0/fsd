const student1={
    rollNo: 1,
    name: "xyz",
    branch: "ds",
    section:"c"
}
const student2={
    rollNo: 1,
    name: "abc",
    branch: "ds",
    section:"c"
}
console.log(student1);
console.log(student2);

class Student{
    constructor(rollNo, name,branch,section){
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.section = section;
    }
}
const student3 = new Student(3,"ab","ds","c");
console.log(student3);