# Proposal for convertArraystoObject function.

## 1) Design

```
Convert two arrays into object with keys belonging to same index of first array and values belonging to same index of second array.
@since version
@category Array
@param {arrayKeys} Array from where keys are specified.
@param {arrayValues} Array from where values are specified.
```

## 2) Pseudo Code

    function convertArraystoObject(arrayKeys, arrayValues){
        // Reduce over keys array
        // Intial value is empty object
        // Assign key to value with specific index
        // Return newly reduced object
    }

## 3) Output

-   ### Basic

```
toObjectWithKeys(['k1', 'k1'], ['v1', 'v2'])
=> { k1: 'v1', k2: 'v2' }

toObjectWithKeys(['name', 'age'], ['Adelina', 30])
=> { name: 'dev', age: 30 }

toObjectWithKeys([0, 1], [ {id: 0, name: 'Lilliana'}, {id: 1, name: 'Francisco'} ] )
=> { 0: {id: 0, name: 'Lilliana'}, 1: {id: 1, name: 'Francisco'}  }
Values can be anything ie array or object
```

-   ### Out of index

```
toObjectWithKeys(['name', 'age', 'hobbies'], ['Adelina', 30])
=> { name: 'dev', age: 30 , hobbies: undefined }
if keys are more it will be set to undefined.

toObjectWithKeys(['name', 'age'], ['Adelina', 30, 'Scrapbooking'])
=> { name: 'dev', age: 30 }
if values are more it will be simply ignored.
```

-   ### Misc

```
toObjectWithKeys([{}, {}], ['v1', 'v2'])
=> {}
Since keys cann't be array or object
```

## 4) Ideas

To create an convertArraytoObjectWithKey function which will convert array of objects into object with key specified.

```
convertArraytoObjectWithKey(array, key)
swap([ { id: 0, name: 'John' }, { id: 1, name: 'Sarah' }], 'id' )
=> { 0: { id: 0, name: 'John' }, 1: { id: 1, name: 'Sarah'} }
```

Inform us if you also want us to implement these ideas.
