// # 5. 함수 타입 지정, void 타입

// 1. 함수 타입 지정
// 함수는 파라미터와 return값에 타입 지정 가능

function add(x: number): number {
  return x + 1
}

// 2. void 타입
// 함수에서만 쓸 수 있는 타입
// return 값이 없을 경우

function voidType(x: number): void {
  x + 1
}

// 자바스크립트와 차이점
// 파라미터에 타입을 지정하면 필수 파라미터가 됨
add()

// 파라미터가 옵션일 경우 ? 붙임
// 변수?: number = 변수: number | undefined 같은 뜻
function add2(x?: number): void {

}
add2()

//==============================================================
// 실습문제
// 01.
function output(name?: string): void {
  if (name) console.log("안녕하세요" + name)
  else console.log("이름이 없습니다.")
}

// 02. 
function count (x: string | number): number {
  let a = String(x);
  return a.length
}

function count1 (x: string | number): number {
  return a.toString().length
}

// 03. 
function 결혼(월소득: number, 집:boolean, 매력:string) : string | void {
  let score = 0;
  score += 월소득;

  if (집) score += 500;
  if (매력 === "상") score += 100;

  if (score>=600) return "결혼가능";
  return;
}