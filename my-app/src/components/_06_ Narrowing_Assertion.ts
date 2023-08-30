// # 6. 타입 확정하기 Narrowing & Assertion

function add(x: number | string) {
  return x + 1; //에러남
}

// 타입이 아직 하나로 확정되지 않았을 경우 => Type Narrowing 사용해야 함
// if문 등으로 타입을 하나로 정해주는 것

function add(x: number | string) {
  // if (typeof x === "string"){
  //   return x + "1";
  // } else {
  //   return x + 1;
  // }

  // (주의) if문 썼으면 끝까지 써야 안전
  // else, else if 안쓰면 에러 발생할 수도 있음
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    return;
  }

  // Narrowing으로 판정해주는 문법들
  // typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
  // => 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 인정됨
}

// Assertion 문법(타입 덮어쓰기)
function add(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x를 number로 인식
}

// Assertion 문법의 용도
// 1. Narrowing 할 때 사용(타입 변경 X)
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// 3. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용

// 예전 as문법
let 이름: string = "gyull";
<number>이름;

// as 문법 유용하게 쓰일 때
// 타입을 강제로 부여하는 함수를 하나 만들어쓰고 싶은 때
// 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수를 만들어서 사용
type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

//==============================================================
// 실습문제
// 01. 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function 클리닝함수(x: (number | string)[]): number[] {
  let arr: number[] = [];

  x.forEach((item) => {
    // if (typeof item === "string") arr.push(item as unknown as number);
    // parseFloat()는 문자열을 실수로 바꾸는 함수입니다.
    if (typeof item === "string") arr.push(parseFloat(item));
    else arr.push(item);
  });

  return arr;
}

클리닝함수(["1", 2, "3"]);

// 02.

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

만들함수({ subject: "math" }); //이 경우 'math'를 return
만들함수({ subject: ["science", "art", "korean"] }); //이 경우 'korean'을 return
만들함수({ hello: "hi" }); //이 경우 타입에러 나면 됩니다

function 만들함수(obj: { subject: string | string[] }) {
  if (typeof obj.subject === "string") return obj.subject;
  else if (Array.isArray(obj.subject))
    return obj.subject[obj.subject.length - 1];
  else return "없음";
}
