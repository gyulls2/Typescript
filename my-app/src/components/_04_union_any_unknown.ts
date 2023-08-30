// # 4. union type, any, unknown (타입을 미리 정하기 애매할 때)

// 1. union type
// 타입을 2개 이상 합친 새운 타입 만들 때
let name1: number | string | boolean = "gyull";

// 숫자 or 문자가 가능한 array/object 타입 지정
let arr: (number | string)[] = [1,"2",3]
let obj:{a :string | number} = {a:"123"}


// 2. any 타입
// 모든 자료형 허용
// 타입 해제 문법 => typescript 사용하는 의미 없음(타입관련 버그가 생길 경우 추적하기 어려움)
let anyType: any;
anyType = 123;
anyType = [];


// 3. unknown 타입
// 모든 자료형 허용
// 자료를 할당해도 타입은 그대로 unknown
let unknownType: unknown;
unknownType = 123;
unknownType = {};

// unknown 타입은 any 타입보다 안전함
// unknown 타입을 다른 타입에 할당하려고 하면 에러 발생
let 변수1: string = unknownType;
let 변수2: boolean = unknownType;
let 변수3: number = unknownType;

// 간단한 수학 연산도 타입이 맞아야 함
unknownType - 1;

// 타입스크립트는 타입을 엄격하게 검사함
// string 타입 + 1 -> 허용
// number 타입 + 1 -> 허용
// string | number 타입 + 1 -> 안됨
let num: string | number;
num + 1;

let num2: unknown = 1;
num2 + 1;


//==============================================================
// 실습문제
// 01. 
let x: string = 'kim';
let y:undefined | number = undefined;
let z:boolean = false; 
let i:(string|number|undefined|boolean)[] = [x, y, z];

// 02. 
let 학교:{
  score: (number|boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]