// #3.2 Polymorphism
// type SuperPrint = {
//     (arr:number[]):void;
//     (arr:boolean[]):void;
//     (arr:string[]):void;
//     (arr:(number|boolean)[]):void;
// }

type SuperPrint = {
  <T>(arr:T[]):void;
}


const superPrint : SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3,4])
const b = superPrint([true, true, false])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1,2,true, false,"a"])


// #3.3 Generics Recap

type SuperPrint1 = <T,M>(a:T[],b:M) => T

const superPrint1 : SuperPrint1 = (arr) => arr[0]

const e = superPrint1([1,2,true, false,"a"],"x")


// #3.4 Conclusions
function superPrint2<T>(a:T[]){
  return a[0]
}

const f = superPrint2<number>([1,2,3,4])

type Player<E>= {
  name:string
  extraInfo:E
}
type GyuriExtra = {
  favFood:string
}
type Player1 = Player<GyuriExtra>

const gyuri: Player1 = {
  name:"gyuri",
  extraInfo:{
      favFood:"김치찜"
  }
}

cosnt lee: Player1<null> = {
  name:"gyuri",
  extraInfo:null
}