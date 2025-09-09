# JavaScript Array Methods Guide

## Mutating Methods Table

| Method           | Mutates Original Array? | Description                                       |
| ---------------- | ----------------------- | ------------------------------------------------- |
| Mutating Methods |                         |                                                   |
| push()           | ✅ Yes                  | Adds elements to the end of an array              |
| pop()            | ✅ Yes                  | Removes the last element of an array              |
| shift()          | ✅ Yes                  | Removes the first element of an array             |
| unshift()        | ✅ Yes                  | Adds elements to the beginning of an array        |
| splice()         | ✅ Yes                  | Adds/removes elements at a specific index         |
| sort()           | ✅ Yes                  | Sorts elements in place (alters order)            |
| reverse()        | ✅ Yes                  | Reverses the order of elements                    |
| fill()           | ✅ Yes                  | Modifies all or some elements with a static value |

## copyWithin() ✅ Yes Copies part of an array within itself

## Non-Mutating Methods

These methods do not modify the original array but return a new array or value.

## Transformation Methods

- **map()**: Creates new array by transforming each element
- **filter()**: Creates new array with elements passing a test
- **slice()**: Extracts portion of array into new array
- **concat()**: Combines arrays into new array
- **flat()**: Creates new flattened array from nested arrays
- **flatMap()**: Maps elements and flattens result

## Reduction Methods

- **reduce()**: Reduces array to single value left-to-right
- **reduceRight()**: Reduces array right-to-left
- **join()**: Combines elements into string

## Modern Array Methods (ES2023)

- **toSorted()**: Creates new sorted array
- **toReversed()**: Creates new reversed array
- **toSpliced()**: Creates new array with spliced elements
- **with()**: Creates new array with replaced element

## Search Methods

- **find()**: Returns first matching element
- **findIndex()**: Returns first matching element's index
- **findLast()**: Returns last matching element
- **findLastIndex()**: Returns last matching element's index

## Testing Methods

- **every()**: Tests if all elements pass condition
- **some()**: Tests if any elements pass condition
- **includes()**: Checks for element existence
- **indexOf()**: Gets first matching index
- **lastIndexOf()**: Gets last matching index

## Utility Methods

- **at()**: Gets element at index (supports negative)
  map() ❌ No Creates a new array by applying a function to each element
  filter() ❌ No Creates a new array with elements that pass a condition
  slice() ❌ No Returns a new array containing a portion of the original array
  concat() ❌ No Merges arrays and returns a new array
  flat() ❌ No Flattens nested arrays into a new array
  flatMap() ❌ No Maps and flattens the result into a new array
  reduce() ❌ No Reduces array elements into a single value
  reduceRight() ❌ No Like reduce(), but iterates from right to left
  join() ❌ No Converts elements into a string
  toSorted() (ES2023) ❌ No Returns a new sorted array (non-mutating alternative to sort())
  toReversed() (ES2023) ❌ No Returns a new reversed array (non-mutating alternative to reverse())
  toSpliced() (ES2023) ❌ No Returns a new array with spliced elements (non-mutating splice())
  find() ❌ No Returns the first matching element (does not modify array)
  findIndex() ❌ No Returns index of first matching element (does not modify array)
  findLast() (ES2023) ❌ No Returns last matching element (does not modify array)
  findLastIndex() (ES2023) ❌ No Returns index of last matching element
  every() ❌ No Checks if all elements meet a condition
  some() ❌ No Checks if at least one element meets a condition
  includes() ❌ No Checks if an element exists in the array
  indexOf() ❌ No Finds the first index of a given element
  lastIndexOf() ❌ No Finds the last index of a given element
  at() (ES2022) ❌ No Returns the element at a given index (supports negative indexes)
  with() (ES2023) ❌ No Returns a new array with an element replaced at a specific index
