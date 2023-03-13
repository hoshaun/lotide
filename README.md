# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hoshaun/lotide`

**Require it:**

`const _ = require('@hoshaun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Returns true if arrays arr1 and arr2 are the same
* `assertEqual(actual, expected)`: Returns true if actual === expected
* `assertObjectsEqual(actual, expected)`: Returns true if two objects are the same
* `countLetters(sentence)`: Returns an object containing key-value pairs counting the number of occurrences of each letter in a sentence
* `countOnly(allItems, itemsToCount)`: Returns an object containing the number of occurrences of each item in itemsToCount that occurs in allItems
* `eqArrays(arr1, arr2)`: Recursively inspects two input arrays and returns true if they are the same
* `eqObjects(object1, object2)`: Recursively inspects two input objects and returns true if they are the same
* `findKey(obj, callback)`: Returns the first key found in obj that satisfies callback(obj.key)
* `findKeyByValue(obj, val)`: Returns the first key found in obj where obj.key === val
* `flatten(arr)`: Returns a new array by flattening arr
* `head(array)`: Returns the head of array
* `letterPositions(sentence)`: Returns an object containing key-value pairs where keys are the letters in sentence and values are an array containing the indices where each letter appears in the sentence
* `map(array, callback)`: Returns a new array containing the values modified by mapping input array using callback function
* `middle(arr)`: Returns the middle elements of arr
* `tail(array)`: Returns the tail of array
* `takeUntil(array, callback)`: Returns a new array containing the items in array up until the callback condition is satisfied
* `without(source, itemsToRemove)`: Returns a new array containing the items in source excluding the items in itemsToRemove