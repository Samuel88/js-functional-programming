const people = [
    { id: 4, name: 'Paolo', age: 32 },
    { id: 3, name: 'Clelia', age: 34 },
    { id: 4, name: 'Lucia', age: 33 },
    { id: 3, name: 'Raffaela', age: 35 },
    { id: 4, name: 'Pippo', age: 36 },
    { id: 3, name: 'Ludovico', age: 34 },
];

// col for
let myPerson;
for (let i = 0; i < people.length && myPerson === undefined; i++) {
    const person = people[i];


    if (person.age === 34) {
        myPerson = people[i];
    }

}
//console.log(myPerson);


const valoreRestituito = people.findIndex((person, index) => {
    const {name} = person;

    if (name.toLowerCase() === 'pippo') {
        return true;
    } else {
        return false;
    }
});

console.log(valoreRestituito);
