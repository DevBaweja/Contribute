## Possible Ways of implementing unwind

### 1) Taking arrayOfKeys as first argument

```js
// @param {arrayOfKeys} Array of keys which is to be unwind.
// @param {arrayOfObjects} Array of objects on which unwind will occur.

unwind(['hobbies', 'colors'], [{ hobbies: ['h1', 'h2'], colors: ['c1', 'c2'] }]);
// => [
//     { hobbies: 'h1', colors: 'c1'},
//     { hobbies: 'h1', colors: 'c2'},

//     { hobbies: 'h2', colors: 'c1'},
//     { hobbies: 'h2', colors: 'c2'},
// ]
```

Output will contain all the combination of h1,h2 and c1,c2.
However, keys name remain the same. And renaming from hobbies -> hobby, colors -> color
can be done afterwards.

### 2) Taking ObjectsWithKeyAndRename as first argument

```js
// @param {ObjectsWithKeyAndRename} Object where key is key in final output and value is used to unwind the object.
// @param {arrayOfObjects} Array of objects on which unwind will occur.

unwind({ hobbies: 'hobby', colors: 'color' }, [{ hobbies: ['h1', 'h2'], colors: ['c1', 'c2'] }]);
// => [
//     { hobby: 'h1', color: 'c1'},
//     { hobby: 'h1', color: 'c2'},

//     { hobby: 'h2', color: 'c1'},
//     { hobby: 'h2', color: 'c2'},
// ]
```

-   [x] { hobby: 'hobbies', color: 'colors' }
-   [ ] { hobbies: 'hobby', colors: 'color' }

If we consider this, user will expect same structure { hobby: ' ', color: ' ' } in output as given in input argument.

-   [ ] { hobby: 'hobbies', color: 'colors' }
-   [x] { hobbies: 'hobby', colors: 'color' }

If we consider this, it signifies that hobbies will be replaced by hobby which we think is more consistent.

### 3) Only Renaming Keys and not multiple occurrence

```js
// @param {key} key is used to unwind the object.
// @param {keyRename} key is used in final output.
// @param {arrayOfObjects} Array of objects on which unwind will occur.

const xs = [{ hobbies: ['h1', 'h2'], colors: ['c1', 'c2'] }];

const ys = unwind('hobbies', 'hobby', xs);
// => [
//     { hobby: 'h1', color: ['c1', 'c2']},
//     { hobby: 'h2', color: ['c1', 'c2']},
// ]

const zs = unwind('colors', 'color', ys);
// => [
//     { hobby: 'h1', color: 'c1'},
//     { hobby: 'h1', color: 'c2'},

//     { hobby: 'h2', color: 'c1'},
//     { hobby: 'h2', color: 'c2'},
// ]
```

This is really the way to go. It avoid confusion and have very clear syntax.

### String as value to be unwind

```js
unwind(hobbies, 'hobby', [{ hobbies: 'Golf', colors: ['c1', 'c2'] }]);
// => [
//     { hobby: 'Golf', color: ['c1', 'c2']},
// ]
```

In this case it will simply return the original value of key and will not further unwind the string

Let me know which of these you think will be best to implement for unwind function.
And we will sharing some more test cases of that specific case.

[To known all about unwind](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/)
