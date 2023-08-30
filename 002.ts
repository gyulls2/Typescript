
type Name = string;
type Player = {
    readonly name:Name,
    age?:number
}


function playerMaker(name:string) : Player {
    return {
        name
    }
}

const gyuri = playerMaker("규리")
console.log(gyuri.age)

const numbers : readonly number[] = [1,2,3,4]
// numbers.push(1)

const names : readonly string[] = ["1","2"]
// names.push("1")

// Tuple 
const player1: readonly [string, number, boolean] = ["gyuri", 26, false]


//nuknown
let a:unknown;

if(typeof a === "number"){
    let b = a + 1
}

if(typeof a === "string"){
    let c = a.toUpperCase();
}

//void : 아무것도 리턴하지 않는 function
function hello(){
    console.log("x")
}
const d = hello();
d.toUpperCase()


// never : 함수가 절대 return 하지 않을 때
function hello1(name:string|number){
    if(typeof name === "string"){
        name
    } else if (typeof === "number") {
        name
    } else {
        name
    }
}