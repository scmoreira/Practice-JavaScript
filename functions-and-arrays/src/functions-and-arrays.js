// Find the maximum
function maxOfTwoNumbers (num1, num2) {
  let maxValue = num1
  if (num2 > num1) {
    maxValue = num2
  }
  return maxValue
}

// Find the longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (array) {
  if (array.length === 0) {
    return null
  }
  let indexLongestWord = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > array[indexLongestWord].length) {
      indexLongestWord = i
    }
  }
  return array[indexLongestWord]
}

// Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(array) {
  if (array.length === 0) {
    return 0
  }
  let summatory = 0
  for (let i = 0; i < array.length; i++) {
    summatory += array[i]
  }
  return summatory
}

// A generic `sum()` function

function sum(array) {
  if (array.length === 0) {
    return 0
  }
  let summatory = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) == "string") {
      summatory += array[i].length
    } 
    else if (typeof(array[i]) == "boolean") {
      if (array[i]) {
        summatory ++
      }
    }
    else if (typeof(array[i]) == ("object" || "array")) {
      throw new Error("Unsupported data type sir or ma'am")
    }
    else {
      summatory += array[i]
    }
  }
  return summatory
}

// Calculate the average
// Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(array) {
  if (array.length === 0) {
    return null
  }
  let summatory = 0
  for (let i = 0; i < array.length; i++) {
    summatory += array[i]
  }
  return summatory / array.length
}

// Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array) {
  if (array.length === 0) {
    return null
  }
  let summatory = 0
  for (let i = 0; i < array.length; i++) {
    summatory += array[i].length
  }
  const average = summatory / array.length
  return average
}

// A generic `avg()` function
function avg(array) {
  if (array.length === 0) {
    return null
  }
  let summatory = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) == "string") {
      summatory += array[i].length
    } 
    else if (typeof(array[i]) == "boolean") {
      if(array[i]) {
        summatory ++
      }
    }
    else {
      summatory += array[i]
    }
  }
  return parseFloat((summatory / array.length).toFixed(2))
}

// Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (array.length === 0) {
    return null
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].localeCompare(array[j]) == 0) {
        array.splice(j,1)
        j--
      }
    }
  }
  return array
}

// Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(array, targetWord) {
  if (array.length === 0) {
    return null
  }
  else if (array.includes(targetWord)) {
    return true
  }
  else {
    return false
  }
}

// Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, targetWord) {
  if (array.length === 0) {
    return 0
  }
  let wordCount = 0
  array.forEach(function (elm) {
    if (elm == targetWord) {
    wordCount++
    }
  })
  return wordCount
}