## Simplicity is best

We think that it is bit unnecessary to rename the keys in unwind function.
which brings us to have another function `mapKeys`.(discussed later)

About single value we suggest that design of function must be refactored.

```js
unwind :: Dictionary -> Record -> [Record]
```

is more useful.

```js
// @param {arrayOfKeys} The array of keys which you want to unwind.
// @param {object} object to be unwind.

unwind(['hobbies', 'colors'], {
    name: 'Alex',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green']
});
=> [
    { name: 'Alex',hobbies: 'Golf', colors: 'red'},
    { name: 'Alex',hobbies: 'Golf', colors: 'green'},
    { name: 'Alex',hobbies: 'Hacking', colors: 'red'},
    { name: 'Alex',hobbies: 'Hacking', colors: 'green'},
]
```

It will support `multiple arrays` and create combination of elements of those arrays.
Instead of `[Record]` we now pass only `Record` as argument

And it will return `[Record]` with each object containing one combination of total combinations.

And for previous implementation where we take `[Record]` instead of `Record` can be done by chain on this newly created unwind as suggested.

## mapKeys / renameKeys function

Now, we come to renaming of the keys in `[Record]`.
There are two ways -

-   We create function that takes only `Record`. Named as renameKeys

```js
// { k: 'v' }
// rename k to v in object passed
renameKeys({ hobbies: 'hobby', colors: 'color' }, { name: 'Alex', hobbies: 'Golf', colors: 'red' });
// => { name: 'Alex', hobby: 'Golf', color:'red' }
```

This is useful anyways.

And in our case, we map over array.

```js
// unwind returns us [Record]
// we map over [Record] and apply renameKeys to each and every Record
pipe(unwind(['hobbies', 'colors']), map(renameKeys({ hobbies: 'hobby', colors: 'color' })));
```

-   Or, We create function that takes `[Record]`. Named as mapKeys

```js
const xs = [
    { name: 'Alex', hobbies: 'Golf', colors: 'red' },
    { name: 'Alex', hobbies: 'Golf', colors: 'green' },
    { name: 'Alex', hobbies: 'Hacking', colors: 'red' },
    { name: 'Alex', hobbies: 'Hacking', colors: 'green' },
];
mapKeys({ hobbies: 'hobby', colors: 'color' }, xs);

// => [
//     { name: 'Alex', hobby: 'Golf', color: 'red' },
//     { name: 'Alex', hobby: 'Golf', color: 'green' },
//     { name: 'Alex', hobby: 'Hacking', color: 'red' },
//     { name: 'Alex', hobby: 'Hacking', color: 'green' },
// ]
```

-   We were also thinking of mapKeys(function, xs) which allows us to dynamically name key of object in function.

For ex -

```js
const xs = [
    { ids: 'id1', name: 'Bob' },
    { ids: 'id2', name: 'Alex' },
];
mapKeys(
    applySpec({
        ids: prop('ids'),
    }),
    xs
);
// => [{ id1: 'id1', name: 'Bob' }, { id2: 'id2', name:'Alex' }];
```

## About Error Handling

Apologize for using String. We were being extra specific about that example only.

```js
unwind({ hobbies: 'hobby', colors: 'color' })({ name: 'Francisco', hobbies: 'Golf', colors: ['red', 'blue'] });
//=> [
//   { name: 'Francisco', hobbies: 'Golf', color: 'red' }
//   { name: 'Francisco', hobbies: 'Golf', color: 'blue' }
// ]
```

Non-iteratable values will be ignored.

We will wait untill some discussions is done on these functions. Once confirmed, if any of these is accepted. We will be producing some more test cases and proceed to implementing them.
