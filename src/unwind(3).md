## Refactored API

```js
newUnwind :: String -> Record -> [Record]
```

(We are not suggesting renaming the function newUnwind/oldUnwind. It is just for understanding.)
Let us make this really simple.

```js
// @param {key} key by which object will be unwinded
// @param {object} object to be unwinded
newUnwind('hobbies', {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
});
// => [
//      { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
//      { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
// ]
```

Also as everyone agreed that renaming is a separate concern. So, we will be focusing on String/List as the first argument instead of a Dictionary.
It can serve all the possible cases we have discussed so far.
For instance:-

```js
oldUnwind :: List -> [Record] -> [Record]
```

1. About `List` to `String` in the first argument

The same effect of List can be easily obtained by chaining.

2. About `[Record]` to `Record` in second argument
   We can apply our newly created newUnwind in map to each and every
   Record.
   Previously,

```js
const xs = [
    { name: 'Francisco', hobbies: ['Hacking', 'Ice skating'] },
    { name: 'Adelina', hobbies: ['Juggling', 'Graffiti', 'Painting'] },
];
oldUnwind(['hobbies'], xs);
// => [
//     { name: 'Francisco', hobbies: 'Hacking'},
//     { name: 'Francisco', hobbies: 'Ice skating'},

//     { name: 'Adelina', hobbies: 'Juggling'},
//     { name: 'Adelina', hobbies: 'Graffiti'},
//     { name: 'Adelina', hobbies: 'Painting'},
// ]
```

Now,

```js
pipe(map(newUnwind(['hobbies']))(xs);
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
```

Yes, there is slight differences in final output structure.
`[{},{},{},{},{},{}] is replaced with [ [{},{}], [{},{},{}]]`
As newUnwind combined the Record with name: 'Francisco' | name: 'Adelina' in its own list which is quite correct in some sense.
Although it can be solved by flattening the list.

## So, what's next?

```js
unwind :: String -> Record -> [Record]
```

is the simplest way to implement it with clear syntax and beginner's friendly nature.

> What about doing the single property unwind, then an unwindAll that takes an array of keys?

In, future we can implement all sort of functions related to unwind

Ex:-

```js
unwindAll :: List -> Record -> [Record]
unwindAll(['hobbies', 'colors'], xs);
```

Also, some sort of the inverse of these functions

```js
wind :: String -> [Record] -> Record
wind('hobby',[
    { name: 'alice', hobby: 'Hacking' },
    { name: 'alice', hobby: 'Juggling' },
])
// => { name: 'alice', hobby: ['Hacking', 'Juggling'] }
```

@CrossEye

> I agree. I've needed a function like this several times,
> and think it would be worth having, but I don't think it belongs in Ramda.
> As everyone has noted, it's easy enough to build out of the parts we're proposing.

> I'm inclined at this point to include this function.
> I think it will pair well with unwind in several useful ways.

We also agree it is quite trivial to build these functions.`(mapKeys/renameKeys)`
However, we also think that these functions have the potential to be included in ramda.
That can be our discussion for some other time.

> I'd love to hear more about your company and what brought you to working on Ramda

We are a group of students currently pursuing B.Tech in Computer Science. We want to contribute to an open-source project. And we think ramda is a great way to do so due to its simple architecture and efficiency. We are thankful that you approved our request. Looking forward to work and coordinate on the Ramda Project with you.
