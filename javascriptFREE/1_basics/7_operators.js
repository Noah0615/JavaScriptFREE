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

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == '1'); // true

console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(0 == ''); // true
console.log(true === 1); // false
console.log(false === 0); // false
console.log(true === '1'); // false

console.log('---------------------');

console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(0 != ''); // false
console.log(true != 1); // false
console.log(false != 0); // false
console.log(true != '1'); // false

console.log('---------------------');

console.log(5 !== 5); // false
console.log(5 !== '5'); // true
console.log(0 !== ''); // true
console.log(true !== 1); // true
console.log(false !== 0); // true
console.log(true !== '1'); // true

console.log('---------------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false

/**
  * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다'); // 10이 0보다 크다
console.log('---------------------');
/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && (and) 조건은 모두 true 일 때만 true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log('---------------------');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log('---------------------');
console.log(10 > 1 && 20 > 2); // true
console.log(10 > 1 && 20 < 2); // false
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false
console.log('---------------------');
console.log(10 > 1 || 20 > 2); // true
console.log(10 > 1 || 20 < 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

/**
 * 단축평가 (short-circuit evaluation)
 * 
 * &&를 사용했을떄 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log('---------------------');
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(true && '아이브'); // 아이브
console.log(false && '아이브'); // false

console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // false

/**
 * 지수 연산자
 */
console.log('---------------------');
console.log(2 ** 3); // 8
console.log(10 ** 3); // 1000

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리'; // name이 null이나 undefined면 '코드팩토리'를 할당
console.log.name;

name = name ?? '아이브';
console.log(name); // 코드팩토리

let name2;
name2 ??= '코드팩토리';
console.log(name2); // 코드팩토리