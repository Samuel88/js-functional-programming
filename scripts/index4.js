const students = [
    { id: 1, name: 'Marco', year: 1 },
    { id: 1, name: 'Silvia', year: 2 },
    { id: 1, name: 'Ginevra', year: 3 },
    { id: 1, name: 'Laura', year: 4 },
    { id: 1, name: 'Giada', year: 1 },
    { id: 1, name: 'Tonia', year: 2 },
    { id: 1, name: 'Alfredo', year: 2 },
    { id: 1, name: 'Luigi', year: 3 },
    { id: 1, name: 'Beppe', year: 3 },
];



// Prendiamo gli studenti dal secondo anno e li inseriamo in un array
/*
const studentFromSecondYears = [];
for(let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.year >= 2) {
        studentFromSecondYears.push(student);
    }
}

console.log(studentFromSecondYears);
*/

/*
const valoreRestituito = students.filter((student, index) => {
    return student.year >= 2; // true
});
*/

const names = [
    'Luigi', // 0
    'Mario',
    'Gianni', // 2
    'Raffaele',
    'Ugo', // 4
    '    ',
    ' ',
    'Pio',
    'Rio',
];

const valoreRestituito = names.filter((name, index) => {
    const nameSafe = name.trim();

    if (nameSafe === '') {
        return false;
    } else if (nameSafe.length < 6) {
        return false;
    }

    return true;
});

console.log(valoreRestituito);


