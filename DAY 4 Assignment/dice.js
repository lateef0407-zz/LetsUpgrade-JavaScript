const student =
{
 name : "Rio",
 age : 20,
 projects:
 {
     diceGame: "Two players dice game using Javascript"
 }
}

console.log(student)
const{name, age, projects:{diceGame}} = student;
console.log(name, age, diceGame)
