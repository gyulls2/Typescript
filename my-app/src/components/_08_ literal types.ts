//  8. literal types
// 어떤 변수가 미리 골라놓은 데이터만 가질 수 있게 함
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능

let 이름: "gyull"; // 이 변수에는 무조건 "gyull"만 들어올 수 있음
이름 = 123;

let 빵: "단팥빵" | "소금빵";

function 함수(a: "hello"): 1 | 0 {
  // 파라미터, 리턴 값도 literal types로 지정 가능
  return 1;
}
함수("hello");

function game(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}

// literal types은 const 변수와 유사하게 사용할 수 있음
// Literal type의 문제점
var obj = {
  name: "gyull",
} as const;

obj.name; // "gyull"

function func(a: "gyull") {}
// "gyull"이라는 자료만 들어올 수 있음 X
// "gyull"이라는 타입만 들어올 수 있음 O

func(obj.name); // 오류 발생 type: string이기 때문

// 1. object 만들 때 타입을 미리 정하기
// 2. assertion을 쓰시든가 (as 'kim' 이런걸 붙이는 겁니다)
// 3. as const 를 object 자료에 붙이기
//   - 타입을 object의 value로 바꿔줌 (타입을 'gyull'으로 바꿔줌)
//   - object안에 있는 모든 속성을 readonly로 바꿔줌 (변경하면 에러나게)

// object를 잠그고 싶으면 as const 활용

export {};
