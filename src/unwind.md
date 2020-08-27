# Feature Request: unwind function.

## 1) Design

```
Deconstructs an array field from the input objects to output a object for each element.
Each output object is the input object with the value of the array field replaced by the element.
@since version
@category Array
@param {array} The array of objects which you want to unwind.
@param {key} Key of object containing the array to be unwind.
```

## 2) Output

-   ### Basic

```js
unwind(
    [
        { name: 'Francisco', hobbies: ['Hacking', 'Ice skating'] },
        { name: 'Adelina', hobbies: ['Juggling', 'Graffiti', 'Painting'] },
    ],
    'hobbies'
);
// => [
//     { name: 'Francisco', hobbies: 'Hacking'},
//     { name: 'Francisco', hobbies: 'Ice skating'},

//     { name: 'Adelina', hobbies: 'Juggling'},
//     { name: 'Adelina', hobbies: 'Graffiti'},
//     { name: 'Adelina', hobbies: 'Painting'},
// ]
```

Inform us if you also want us to implement these ideas.
