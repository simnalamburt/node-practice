/* @flow */

//
// Basic check
//
var hello = (): string => {
  return 'Hello, world';
};

console.log(hello());


//
// ES6 Modules check
//
import readFileSync from 'fs';

export { hello };
export const foo = Math.sqrt(2);
export function asdf(): string {
  return 'asdf';
}

export function cube(x: number): number {
  return x * x * x;
}


//
// Generator
//
var gen = function*() { return 100; }


//
// Promise
//
function getValues() {
    return Promise.resolve([1,2,3,4]);
}

getValues().then(function(values) {
    console.log(values);
});


//
// Async
//
async function asyncFoo(): Promise {
  if( Math.round(Math.random()) )
    return 'Success!';
  else
    throw 'Failure!';
}

// Is equivalent to...

function PlainFoo() {
  if( Math.round(Math.random()) )
    return Promise.resolve('Success!');
  else
    return Promise.reject('Failure!');
}
