// 7. Type Aliases (별칭)

// type Aliases 작명 관습
// 대문자로 시작
// 뒤에 Type을 붙임
// 같은 이름의 Type Aliases 재정의 불가능

type Fruit = string | number | undefined;
let 과일: Fruit = 123;

type Obj = { name: string; price: number };
let 과일1: Obj = { name: "딸기", price: 5000 };

// const 변수는 등호로 재할당만 막는 역할
// cosnt로 담은 object 수정은 자유롭게 가능
// readonly 키워드 사용하면 읽기 전용 속성이 되므로 object 자료 수정 불가
// 타입스크립트 에러는 에디터 & 터미널에서만 존재함

const fruit = { name: "딸기" };
fruit.name = "수박";

type Animal = { readonly name: string };
const animal: Animal = { name: "cat" };
animal.name = "dog";

// object 속성 안에도 ? 사용 가능
type Animal2 = { name?: string }; // = name : string | undefined
const animal2: Animal2 = { name: "cat" };
animal2.name = "dog";

// type Aliases union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기
type X = { x: number };
type Y = { y: number };
type XY = X & Y;
let xy: XY = { x: 10, y: 10 };
