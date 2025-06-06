// Lesson: Writing your first tests
const max = ( a, b ) => {
  if ( a > b ) return a
  if ( b > a ) return b
  return a
}

// Exercise
const fizzBuzz = ( n ) => {
  if ( n % 3 == 0 && n % 5 == 0 ) return 'FizzBuzz'
  if ( n % 3 == 0 ) return 'Fizz'
  if ( n % 5 == 0 ) return 'Buzz'
  return n.toString()
}

// Calculate average of numbers in an array
const average = ( numbers ) => {
  if( !numbers || !numbers.length ) return NaN

  return numbers.reduce( ( sum, currVal ) => sum + currVal, 0 ) / numbers.length
}

const sum = ( numbers ) => {
  if( !numbers || !numbers.length ) return NaN

  return numbers.reduce( ( sum, number ) => sum + number, 0 )
}

export {
  max,
  fizzBuzz,
  average,
  sum,
}