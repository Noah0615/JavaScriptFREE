/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/2 %3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString()); // 1
console.log((3 * 10 / 2 % 3).toString()); // 0.5

console.log('---------------------');

function calculate(){
    console.log((2 * 10 / 2 % 3).toString()); // 1
}

// calculate();

function calculate(number){
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력 받는 값을 Argument라고 한다.
 */
calculate(4); // 2
calculate(5); // 1

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 4); // 8

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4); // 8
multiply(2); // 20

/**
 * 반환받기
 * return 받기
 */
console.log('---------------------');
function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4); // 8
console.log(result1);

const result2 = multiply(4, 5); // 20
console.log(result2);

/**
 * Arrow Function
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4)); // 12

const multiply3 = (x, y) => x * y;
console.log(multiply3(5, 4)); // 20

const multiply4 = x => x * 2;
console.log(multiply4(5)); // 10

const multiply5 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(1)(2)(3)); // x: 1, y: 2, z: 3

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x}, y: ${y}, z: ${z}`;
        }
    }
}
console.log(multiply6(1)(2)(3)); // x: 1, y: 2, z: 3

const multiplyTwo = function(x, y){
    return x * y;
}
console.log(multiplyTwo(2, 3)); // 6

const multiplyThree = function (x, y, z){
    console.log(arguments);
    return x * y * z;
}

console.log('---------------------');
console.log(multiplyThree(2, 3, 4)); // 24

console.log('---------------------');
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(2, 3, 4, 5, 4, 2, 3, 3, 4, 5, 5, 5, 4)); // 24

// immediately invoked function expression
(function(x, y) {
    console.log(x * y);
})(4, 5);

console.log('---------------------');
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true