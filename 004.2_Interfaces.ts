// #4.2 Interfaces



type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

// interface는 오로지 객체의 형태를 타입스크립트에게 설명해주기 위한 용도로만 사용
// interface Player  {
//   nickname: string,
//   healthBar: Health,
//   team: Team
// }
// const gyuri: Player = {
//   nickname: "gyuri",
//   healthBar: 10,
//   team:"red"
// }

// type Player =  {
//   nickname: string,
//   healthBar: Health,
//   team: Team
// }

interface User{
  name:string
}

interface Player extends User {

}

const gyuri:Player = {
  name:"gyuri"
}

//위으 코드를 타입으로 바꾸면
type User1 = {
  name:string
}

type Player1 = User & {

}

const gyuri1 : Player = {
  name:"gyuri"
}


// 인터페이스를 중복 선언하면 ts가 합쳐준다
interface User {
  name:string
}

interface User{
  lastName:string
}

interface User{
  health:number
}

const gyuri2:User = {
  name:"gyuri",
  lastName:"kim",
  health:10
}


type User {
  name:string
}

type User{
  lastName:string
}