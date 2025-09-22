const students = {
    rollNo : 101,
    name : "Saksham",
}
// converting object to JSON
const objToJSON = JSON.stringify(students);
console.log(objToJSON);
console.log("type of objToJSON: ", typeof objToJSON);

// converting JSON to object
const jsonToObj = JSON.parse(objToJSON);
console.log(jsonToObj);
console.log("type of jsonTOObj: ", typeof jsonToObj);

const jsonData = [
    {
        "rollNo": 101,
        "name": "Saksham"
    },
    {
        "rollNo": 102,
        "name": "Sachin"
    },
    {
        "rollNo": 103,
        "name": "Shashwat"
    }
]

jsonData.forEach((data) => {
    console.log(data.rollNo);
    console.log(data.name);
});