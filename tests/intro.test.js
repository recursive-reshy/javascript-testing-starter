import { describe, it, expect } from 'vitest'
import { max, fizzBuzz, average } from '../src/intro'

describe( 'max', () => {
  it( 'should return the first argument if it is greater', () => {
    // AAA ( Arrange, Act, Assert )
    expect( max( 2, 1 ) ).toBe( 2 )
  } )
  it( 'should return the second argument if it is greater', () => {
    expect( max( 1, 2 ) ).toBe( 2 )
  } )
  it( 'should return the first argument if they are equal', () => {
    expect( max( 2, 2 ) ).toBe( 2 )
  } )
} )

describe( 'fizzBuzz', () => {
  it( 'should return FizzBuzz if the number is a multiple of 3 and 5', () => {
    expect( fizzBuzz( 15 ) ).toBe( 'FizzBuzz' )
  } )

  it( 'should return Fizz if the number is a multiple of 3', () => {
    expect( fizzBuzz( 3 ) ).toBe( 'Fizz' )
  } )

  it( 'should return Buzz if the number is a multiple of 5', () => {
    expect( fizzBuzz( 5 ) ).toBe( 'Buzz')
  } )

  it( 'should return the number as a string if it is not a multiple of 3 or 5', () => {
    expect( fizzBuzz( 1 ) ).toBe( '1')
  } )
} )

describe( 'average', () => {
  it( 'should return NaN if there is no array or the array is empty', () => {
    expect( average() ).toBe( NaN )
  } )

  it( 'should return the average of numbers in an array', () => {
    expect( average( [ 1, 2, 3 ] ) ).toBe( 2 )
  } )
} )