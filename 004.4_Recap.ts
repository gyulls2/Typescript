// #4.4 Recap

// type PlayerA = {
//   name: string
// }
// type PlayerAA = PlayerA & {
//   lastName: string
// }
// type은 중복 선언으로 프로퍼티 추가 불가능
// type PlayerAA  = {
//   health:number
// }
// const palyerA : PlayerAA = {
//   name : "gyuri",
//   lastName:"kim"
// }

// ////
// interface PlayerB {
//   name:string
// }
// interface PlayerBB extends PlayerB {
//   lastName:string
// }

// // interface는 중복 선언으로 프로퍼티 추가 가능
// interface PlayerBB {
//   health:number
// }

// const palyerB : PlayerBB = {
//   name : "gyuri",
//   lastName:"kim",
//   health:10
// }

// 인터페이스와 타입 모두 추상 클래스를 대체해서 쓸 수 있다.

type PlayerA = {
  firstName: string
}

interface PlayerB {
  firstName: string
}

class User implements PlayerA {
  constructor(
    public firstName: string
  ){}
}
class User1 implements PlayerB {
  constructor(
    public firstName: string
  ){}
}