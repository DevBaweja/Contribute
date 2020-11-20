const key = 'hobby';
const list = [
    { name: 'alice', hobby: 'Hacking' },
    { name: 'alice', hobby: 'Juggling' },
];

const wind = (key, list) => {
    const object = { ...list[0], [key]: [] };
    list.forEach(item => object[key].push(item[key]));
    return object;
};

const windResult = wind(key, list);
console.log(windResult);
// => { name: 'alice', hobby: [ 'Hacking', 'Juggling' ] }
