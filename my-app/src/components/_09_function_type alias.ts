// 9. 함수와 methods에 type alias 지정

type 함수타입 = (a: string) => number; // 파라미터로 string, 리턴값으로 number 타입

let 함수: 함수타입 = function (a) {
  return 123;
};

// object 안에 함수 만들기(methods)
// object 안의 함수 타입지정
type People = {
  name: string;
  plus: (a: number) => number;
  reName: () => void;
};

let obj: People = {
  name: "gyull",
  plus(a) {
    return a + 1;
  },
  reName: () => {
    console.log("hello");
  },
};

obj.plus(1);


// 02.
type Zero = (a:string) => string;
type Dash = (a:string) => number;

let cutZero: Zero = function(a){
  if(a[0]==="0"){
    return a.slice(1)
  }
  return a
}

let removeDash: Dash = function(a){
  return 
}

// 문자열을 실수로 변환






















export {};
