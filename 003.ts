// #3.0 Call Signatures
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// const add = (a:number,b:number) => a + b;

// #3.1 Overloading
// 여러 call signatures가 있는 함수
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// 오버로딩을 사용하는 예시 : Nextjs
// 아규먼트로 객체를 보낼 수도 있고 문자열을 보낼 수도 있음
Router.push({
  Path: "/home",
  state: 1,
});
Router.push("/home");

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 여러개의 아규먼트를 가지고 있을 때
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add1: Add1 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add1(1, 2);
add1(1, 2, 3);
