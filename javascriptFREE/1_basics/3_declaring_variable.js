/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let - 변수 선언
 * 3) const - 상수 선언
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '뉴진스2';
console.log(newJeans); // 에러 발생


/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name = '코드팩토리'; // 변수 선언
console.log(name); // undefined

let grilFriend;
console.log(grilFriend); // undefined

// const grilFriend2; // 무조건 선언해야 함