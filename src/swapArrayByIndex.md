# Better proposal of Array swap function.

## 1) Design

```
Swap two elements in an array
@since version
@category Array
@param {array} The array where the elements would be swapped.
@param {indexA} The index of the first element.
@param {indexB} The index of the second element.
```

## 2) Pseudo Code

    function swapArrayByIndex(array, indexA, indexB){
        // Creating new array
        // Swapping the new array elements of indexA and indexB
        // Return new array
    }

## 3) Output

-   ### Basic

```
swapArrayByIndex([1,2,3], 0, 1)
=> [2,1,3]

swapArrayByIndex(['1','2','3'], 0, 1)
=> ['2','1','3']

swapArrayByIndex([{k1:'v1'}, {k2:'v2'}, {k3:'v3'}], 0, 1)
=> [{k2:'v2'} , {k1:'v1'}, {k3:'v3'}]
```

-   ### Out of index

```
swapArrayByIndex([1,2,3], 0, 4)
=> [1,2,3]
```

-   ### Misc

```
swapArrayByIndex(undefined, indexA, indexB)
=> []
```

## 4) Test

-   ### Identity

Follows identity when indexA and indexB are identical

```
swapArrayByIndex([1, 2, 3], 0, 0)
=> [1, 2, 3]
```

-   ### Commutative

Follows commutative when indexA and indexB are interchanged

```
swapArrayByIndex([1, 2, 3], 0, 1)
=> [1, 2, 3]
swapArrayByIndex([1, 2, 3], 1, 0)
=> [1, 2, 3]
```

-   ### Associative

Doesn't Follow associative

```
swapArrayByIndex(swapArrayByIndex([1, 2, 3], 0, 1), 1, 2)
=> [2, 3, 1]
swapArrayByIndex(swapArrayByIndex([1, 2, 3], 1, 2), 0, 1)
=> [3, 1, 2]
```

## 5) Quality

-   ### Data Immutability

```
Since in creating this function user data is not changed.
As we will create a new array of the given array.
Data Immutability of FP is followed.
```

## 6) Ideas

To create an object swap function which will swap the values of given object.

```
swapArrayByIndex(object, keyA, keyB)
swapArrayByIndex({ a: 1, b: 2}, 'a', 'b')
=> { a:2, b:1 }
```

Inform us if you also want us to implement these ideas.
