const key = 'colors';
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

const keys = ['hobbies', 'colors'];

const unwindAll = (keys, object) => {
    return keys.map(key => unwind(key, object));
};

const list = [
    { name: 'alice', colors: 'red' },
    { name: 'alice', colors: 'green' },
];

const wind = (key, list) => {
    const object = { ...list[0], [key]: [] };
    list.forEach(item => object[key].push(item[key]));
    return object;
};

const unwindResult = unwind(key, object);
const unwindAllResult = unwindAll(keys, object);
const windResult = wind(key, list);
console.log(unwindResult);
console.log(unwindAllResult);
console.log(windResult);
