// #4.3 Interfaces part Two

// abstract class User {
//   constructor(
//     protected firstName: string,
//     protected lastName: string
//   ) { }
//   abstract sayHi(name: string): string
//   abstract fullName(): string
// }

// class Player extends User {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name: string) {
//     return `Hello ${name}. my name is ${this.fullName()}`
//   }
// }

// 추상 클래스 to 인터페이스
// 인터페이스는 Js로 컴파일되지 않는다.
// 인터페이스를 상속하면 private 프로퍼티를 사용하지 못한다.
// 인터페이스는 constructor를 사용하지 않는다.

interface User {
  firstName: string,
  lastName: string,
  sayHi(name: string): string,
  fullName(): string
}

interface Human {
  health:number
}

// 여러 개의 인터페이스를 상속 받을 수 있다.
class Player implements User, Human {
  constructor(
    public firstName:string,
    public lastName:string,
    public health:number
  ){}
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name: string) {
    return `Hello ${name}. my name is ${this.fullName()}`
  }
}

// 인터페이스를 타입으로 지정할 수 있다.
function makeUser(user:User):User{
  return {
  firstName:"gyuri",
  lastName:"kim",
  fullName:()=>"xx",
  sayHi:()=>"hi"
}
}

makeUser({
  firstName:"gyuri",
  lastName:"kim",
  fullName:()=>"xx",
  sayHi:()=>"hi"
})