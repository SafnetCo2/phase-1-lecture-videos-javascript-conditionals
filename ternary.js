function getFee(isMember) {
    return isMember ? '2.00' : '$10.00';
}
console.log(getFee(true));//2
console.log(getFee(false));//10
console.log(getFee(null));//10


function grades(pass) {
    return pass ? '100' : '40';
}
console.log('pass');
console.log('fail');
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice"
console.log(beverage);
const greeting = (person) => {
    const name = person ? person.name : 'stranger';
    return `Howdy,${name}}`;
}
console.log(greeting({ naeme: 'Alice' }))