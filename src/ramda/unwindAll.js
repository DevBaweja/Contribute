const keys = ['hobbies', 'colors'];
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

const unwindAll = (keys, object) => {
    return keys.map(key => unwind(key, object));
};

const unwindAllResult = unwindAll(keys, object);
console.log(unwindAllResult);

// => [
//   [
//     { name: 'alice', hobbies: 'Golf', colors: ['red', 'green] },
//     { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green] }
//   ],
//   [
//     { name: 'alice', hobbies: ['Golf', 'Hacking'], colors: 'red' },
//     { name: 'alice', hobbies: ['Golf', 'Hacking'], colors: 'green' }
//   ]
// ]
