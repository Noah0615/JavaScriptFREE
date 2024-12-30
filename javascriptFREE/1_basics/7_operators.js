/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 더하기 +
 * 2) 빼기 -
 * 3) 곱하기 *
 * 4) 나누기 /
 * 5) 나머지 %
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('---------------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number); // 2
number --;
console.log(number); // 1
console.log('---------------------');
/**
 * 연산자의 위치
 */
let result = 1;
console.log(result); // 1

result = number ++;
console.log(result, number); // 1 2
result = number --;
console.log(result, number); // 2 1

result = ++number;
console.log(result, number); // 2 2

/**
 * 숫자 타입이 아닌 타입에 +, - 연산자를 사용하면?
 */
let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log(sample);
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = '안유진';
// NaN -> Not a Number
console.log(+sample); // NaN

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); // number

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110