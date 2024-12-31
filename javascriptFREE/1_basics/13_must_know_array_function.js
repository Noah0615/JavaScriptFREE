/**
 * Array functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

iveMembers.push('코드팩토리');
console.log(iveMembers);

console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------------');
//shift()
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('---------------------');
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

//concat()
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
