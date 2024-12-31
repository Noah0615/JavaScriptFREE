/**
 * 타입 변환
 * Type Coercion
 * 
 * 1) 명시적
 * 2) 암묵적
*/
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string

// 암묵적
let test = age + '';
console.log(typeof test, test); // string

console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 96

// 명시적 변환 몇가지 더 배우기
console.log('---------------------');
console.log(typeof (99).toString()); // string
console.log(typeof (true).toString()); // string
console.log(typeof (Infinity).toString()); // string

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); // number 0
console.log(typeof parseFloat('0'), parseFloat('0.99')); // number 0.99
console.log(typeof +'1', +'1'); // number 1

/**
 * Boolean 타입으로 변환
 */
console.log('---------------------');
console.log(!'x'); // false
console.log(!!'x'); // true

console.log(!!''); // false

console.log(!!0); // false
console.log(!!'0'); // true