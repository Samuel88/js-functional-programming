const students = [
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Luigi', lastName: 'Verdi' },
    { firstName: 'Margherita', lastName: 'Bianchi' }
];

// col for 
/*
const names = [];
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    names.push(`${student.firstName} ${student.lastName}`);
}

console.log(names);
*/

const valoreRestituito = students.map(({firstName}, index) => {
    console.log('Log');
    return {
        firstName
    }
});

console.log(valoreRestituito);
