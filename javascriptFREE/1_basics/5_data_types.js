/**
 * Data Types
 * 
 * 여섯개의 Primitive Data Types과
 * 한개의 Object Data Type이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (참/거짓)
 * 4) Undefined (정의되지 않음)
 * 5) Null (비어있음)
 * 6) Symbol (ES6에서 추가됨)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */
const age = 32; // Number
const tempature = -10;
const pi = 3.14;

console.log(typeof age); // number
console.log('---------------------');
const infinity = Infinity; // Number
const ninfinity = -Infinity;
console.log(typeof infinity); // number
console.log(typeof ninfinity); // number
console.log('---------------------');

/**
 * String 타입
 */
const codeFactory = '코드팩토리'; // String
console.log(typeof codeFactory); // string

const ive = "'아이브' '안유진'"; // String
console.log(ive);
console.log(typeof ive); // string

const codeFac = '"코드팩토리"'; // String
console.log(codeFac);

/**
 * Template Literals
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) backtick -> \`
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t원영';
console.log(iveWonYoung);
const backSlash = '아이브\\원영';
console.log(backSlash);
const smallQutoation = '아이브\'원영';
console.log(smallQutoation);

const iveWonYoung2 = `아이브 '"'""""""'''''원영' '
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2); // string

const groupName = '아이브';

console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('---------------------');
/**
 * Boolean 타입
 */
const isTrue = true; // Boolean
const isFalse = false; // Boolean
console.log(typeof isTrue); // boolean
console.log(typeof isFalse); // boolean
console.log(isTrue); // true
console.log(isFalse); // false
console.log('---------------------');

/**
 * Undefined 타입
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit); // undefined
console.log(typeof noInit); // undefined

/**
 * Null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용한다.
 */
let init = null;
console.log(init); // null
console.log(typeof init); // object
console.log('---------------------');
/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 사용할 때 Symbol()을 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어진 데이터 구조
 * key:value
 */
const dictionary = {
    red: '빨강',
    orange: '주황',
    yellow: '노랑',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary); // object

/**
 * Array 타입
 * 
 * 값을 list로 나열 할 수 있는 타입니다.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 증가한다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);
iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray); // object

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * 
 * dynamic typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시하지 않는다.
 * JS -> dynamic typing
 */

