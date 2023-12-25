function getTime(time) {
    if (new Date().getHours() < 18) {
        return 'good day'
    }
    console.log(time)
}
getTime(6)
const hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = 'Good day';
} else {
    greeting = "good evening";
}
const number = prompt('enter a number: ');
if (number > 0) {
    console.log('number is positive');
}
console.log('statement is easy');


const numbers = prompt('enter a number')
if (numbers > 0) {
    console.log('wrong number');

} else if (numbers == 0) {
    console.log('positive number');
} else {
    console('negative number')
}

const num = prompt('enter a number');
if (num >= 0) {
    if (num == 0) {
        console.log('you entered 0')
    } else {
        console.log('You entered a positve number')
    }
} else {
    console.log('You entered a negative number')
}

const grade = prompt('enter grades')
if (grade >= 100) {
    console.log('pass')
} else if (grade >= 80) {
    console.log('grade is A');
} else if (grade >= 70) {
    console.log('grade is B');
} else {
    console.log('fail');
}