# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shilpa_pulipati/lotide`

**Require it:**

`const _ = require('@shilpa_pulipati/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head((...)`: displays head of the array
* `tail(...)`:  displays tail of the array
* `middle(...)`: displays middle of the array
  `assertEqual(...)`: displays assertEqual function
  `assertArraysEqual(...)`: displays assertArraysEqual function
  `assertObjectsEqual(...)`: displays assertObjectsEqual function
  `eqArrays(...)`: displays eqArrays function
