[
    {
        name: 'dev',
        hobbies: ['h1', 'h2'],
        colors: ['red', 'green'],
    },
];
// Multiple occurence
unwind({ hobbies: 'hobby', colors: 'color' });
unwind(['hobbies']);
unwind('hobbies', 'hobby');
[
    {
        name: 'dev',
        hobbies: 'h1',
        colors: ['red', 'green'],
    },
    {
        name: 'dev',
        hobbies: 'h2',
        colors: ['red', 'green'],
    },
];

mapKeys({ hobbies: 'hobby' })([{}, {}]);

// map(fn, list)
map(renameKeys({ hobbies: 'hobby' }));

[Record];
Record;

unwind(
    ['hobbies'],
    [
        {
            name: 'alice',
            hobbies: ['h1', 'h2'],
        },
        {
            name: 'bob',
            hobbies: ['h3', 'h4'],
        },
    ]
);

[
    { name: 'alice', hobbies: 'h1' },
    { name: 'alice', hobbies: 'h2' },
    { name: 'bob', hobbies: 'h1' },
    { name: 'bob', hobbies: 'h2' },
];

unwind(['hobbies', 'colors'], {
    name: 'alice',
    hobbies: ['h1', 'h2'],
    colors: ['red', 'green'],
});
unwind('hobbies', {
    name: 'alice',
    hobbies: ['h1', 'h2'],
    colors: ['red', 'green'],
})[({}, {})];

[
    [{}, {}],
    [{}, {}],
];

[{}, {}];
// flatten([[{}, {}],[{}, {}],])
// => [{}, {}];
// Record -> [Record]

const key = 'hobbies';
const object = {
    name: 'foo',
    hobbies: ['Golf', 'Hockey'],
};
const unwind = (key, object) => {
    return object[key].reduce((acc, item) => {
        acc = acc.push({ ...object, key: item });
        return acc;
    }, []);
};
unwind(key, object);
const a = [1, 2, 3];
a.reduce(fn);
a.map(fn);
a.forEach(item => console.log(item));

forEach(fn, a);
map(fn, a);
reduce(fn, a)[(1, 2, 3)];
// return acc;
a.reduce((acc, item) => acc + item, {});
