// Task 1
/*
let userName = prompt("Who's there?");

if (userName === 'Admin') {

    let pass = prompt('Password?');

    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === 'Cancel' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userName === 'Cancel' || userName === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}
*/

//  Task 2

/* let number = prompt("Enter a number greater than 100");
console.log(number);    
while (number <= 100) {
    if (number === '' || number == null) {
        alert("Operation canceled");
        break;
    }
    else
    number = prompt("Enter a number greater than 100");
    
}  */

// Task 3

/* let n = prompt("Enter a number");
console.log(`you entered ${n}`);

for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
} */

// Task 4 
/* let allStudents = [];
do {
    const student = {
    name: "",
    age: 0,
    grades: [],
    average: 0
};


student.name = prompt("Enter you name ");
student.age = prompt("Enter your Age:");


while (true) {
    let grade = prompt("Enter a grade (or press Cancel or Write Stop to finish):");
    if (grade === null || grade === "" || grade==="Stop" ) {
            if (student.grades.length < 3) {
                alert(`You cannot finish yet! You need at least 3 grades. You currently have ${student.grades.length}.`);
                continue
            } else {
                break;
            }
    }  
     
    else if (isNaN(Number(grade)) || Number(grade) < 0 || Number(grade) > 100) {
        
        alert("Please enter a valid Number between 0 and 100.");
        continue;
    }
         student.grades.push(Number(grade));
}

const average = (arr) => arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;

student.average = average(student.grades);
allStudents.push(student);

console.log(`Student Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`here are your grades: ${student.grades.join(', ')}`);
console.log(`Average Grade: ${average(student.grades)}`);
console.log(`Max grade is ${Math.max(...student.grades)}`)
console.log(`Min grade is ${Math.min(...student.grades)}`)


switch (true) {
    case average(student.grades) >= 90:
        console.log("  Excellent");
        break;
    case average(student.grades) >= 80:
        console.log("  very Good");
        break;
    case average(student.grades) >= 70:
        console.log("  Good");
        break;  
    case average(student.grades) >= 60:
        console.log("  Pass");
        break; 
    default:
        console.log("Fail");
}
} while(confirm("Do you want to enter another student?"));

let grandTotalGrades = 0;

allStudents.forEach(s => {
    console.log(`Name: ${s.name} | Average: ${s.average.toFixed(2)}`);
    
    grandTotalGrades = grandTotalGrades + s.grades.length;
});

console.log(`Total number of grades entered : ${grandTotalGrades}`); */

// Taks 5

/* 
function getPower (x,y){

    return x**y
}

console.log(getPower(2,3));
 */
