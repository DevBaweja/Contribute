const key = 'hobbies';
const object = {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
};

const unwind = (key, object) => {
    return object[key].reduce((acc, item) => {
        acc.push({ ...object, [key]: item });
        return acc;
    }, []);
};

const unwindResult = unwind(key, object);
console.log(unwindResult);
// => [
//   { name: 'alice', hobbies: [ 'Golf', 'Hacking' ], colors: 'red' },
//   { name: 'alice', hobbies: [ 'Golf', 'Hacking' ], colors: 'green' }
// ]
