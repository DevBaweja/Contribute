List

unwind
unwind :: String -> Record -> [Record]

```js
// @param {key} key by which object will be unwinded
// @param {object} object to be unwinded
unwind('hobbies', {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
});
// => [
//      { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
//      { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
// ]
```
key 
Key to determine which property of the object should be unwind
object
Object containing list under property named as key which is to unwind

unwind means separating group into multiple individual elements

Returns list of object containing the value of input key having list replaced by each element in the object.

See also unwindAll, wind.

```js
const xs = [
    { name: 'Francisco', hobbies: ['Hacking', 'Ice skating'] },
    { name: 'Adelina', hobbies: ['Juggling', 'Graffiti', 'Painting'] },
];

map(unwind('hobbies')(xs);
// => [
//     [
//         { name: 'Francisco', hobbies: 'Hacking'},
//         { name: 'Francisco', hobbies: 'Ice skating'},
//     ],
//     [
//         { name: 'Adelina', hobbies: 'Juggling'},
//         { name: 'Adelina', hobbies: 'Graffiti'},
//         { name: 'Adelina', hobbies: 'Painting'},
//     ]
// ]
// [{},{}] -> [ [{},{}], [{},{}] ]
```

List

unwindAll
unwindAll :: List -> Record -> [Record]

keys
Keys to determine which properties of the object should be unwind
object
Object containing list under properties named as keys element which is to unwind

unwind means separating group into multiple individual elements

Returns list of object containing the value of input keys having list replaced by each element in the object.

See also unwind, wind

```js
// @param {keys} keys by which object will be unwinded
// @param {object} object to be unwinded
unwindAll(['hobbies', 'colors'], {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
});

// => [
//      { name: 'alice', hobbies: 'Golf', colors: 'red' },
//      { name: 'alice', hobbies: 'Golf', colors: 'red' },
//      { name: 'alice', hobbies: 'Hacking', colors: 'green' },
//      { name: 'alice', hobbies: 'Hacking', colors: 'green' },
// ]
```

List

wind
wind :: String -> [Record] -> Record


key
Key to determine which property of the object should be wind

list
List containing element with property named as keys

wind means combining multiple individual elements into one single group

Returns object containing the value of each element with key replaced by single list.

See also unwind, unwindAll
```js
// @param {key} key by which list will be winded
// @param {list} list to be winded
wind('hobby',[
    { name: 'alice', hobby: 'Hacking' },
    { name: 'alice', hobby: 'Juggling' },
])
// => { name: 'alice', hobby: ['Hacking', 'Juggling'] }
```
