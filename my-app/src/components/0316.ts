function add(num1:number, num2:number){
  console.log(num1 + num2);
}

add(1,2);
add(3,4,5);

function showItem(arr:number[]){
  arr.forEach((item)=>{
      console.log(item);
  });
}

showItem([1,2,3]);
showItem(1,2,3);

// #2 기본 타입 

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

// 튜플(Tuple)
let b:[string, number];
b = ["z", 1];
b = [1, "x"];

b[0].toLowerCase();
b[1].toLowerCase();

// void, never
// void : 함수에서 아무것도 반환하지 않을 때
function sayHello():void{
  console.log("hello");
}

//never : 에러를 반환하거나 영원히 끝나지 않는 함수의 타입
function showError():never{
  throw new Error();
}

function infLoop():never{
  while(true){
      //do something
  }
}

//enum
enum Os{
  Window = 3 ,
  Ios = 10,
  Android
}

console.log(Os["Ios"]);

let myOs:Os;

myOs = Os.Window

// null, undefined
let c:null = null;
let d:undefined = undefined;



// #3 인터페이스

let user:object;

user = {
    name : "xx",
    age: 30,
}

console.log(user.name) 

type Score = "A" | "B" | "C" | "F";

// 프로퍼티를 정의해서 객체로 표현하고자 할 때는 인터페이스 사용
interface User {
    name: string;
    age: number;
    gender?: string; // ?를 붙이면 있어도 되고 없어도 되는 옵셔널한 프로퍼티
    readonly birthYear : number; // 읽기 전용 속성, 생성한 이후 수정 불가
    [grade:number] : Score; // number를 key로 하고 string을 value로 받는 프로퍼티를 여러개 받을 수 있음
}

let user1 : User = {
     name : "xx",
    age: 30,
    birthYear: 2000,
    1: "A",
    2: "a"
}

user1.name = "yy";
user1.gender = "male";
user1.birthYear = 1999;

console.log(user1.name) 

// 인터페이스로 함수 정의
interface Add{
  (num1:number, num2:number):number;
}

const add1 : Add = function(x,y){
  return x + y;
}

add1(10,20);


// boolean값 리턴하는 함수
interface IsAdult{
  (age:number):boolean;
}

const age1:IsAdult = (age) => {
  return age > 19;
}

age1(33)

// implements
// 인터페이스로 클래스 정의

interface Car {
  color: string;
  wheels: number;
  start():void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c:string){
      this.color = c;
  }
  start(){
      console.log("go...")
  }
}

const bmw = new Bmw("green");
console.log(bmw);
bmw.start();

// extends
// 인터페이스 확장

interface Benz extends Car{
  door : number;
  stop(): void;
}

const benz : Benz = {
  door:5,
  stop(){
      console.log("stop");
  },
  color:"black",
  wheels:4,
  start(){
      console.log("Start")
  }
}

// 여러개 확장
interface Toy {
  neme: string;
}

interface ToyCar extends Car, Toy {
  price:number;
}


// #4 함수

// 함수의 파라미터도 옵셔널로 만들 수 있음(선택적 매개변수)
function hello(name?:string) {
  return `hello,${name || "world"}`;
}

function hello2(name="world"):string {
  return `hello,${name}`;
}

const result = hello();

// 필수 매개변수보다 선택적 매개변수가 앞에 올 수 없음
function hello1(name:string, age?:number):string{
  if(age !== undefined){
      return `hello,${name}. you are ${age}`;
  } else {
      return `hello,${name}`;
  }
}

console.log(hello1("sam"));
console.log(hello1("sam", 30));


// 선택적 매개변수를 앞으로 보내려면 
// undefined를 전달하는 방식으로 사용

function hello3(age: number | undefined, name:string):string{
  if(age !== undefined){
      return `hello,${name}. you are ${age}`;
  } else {
      return `hello,${name}`;
  }
}

console.log(hello3(30, "sam"));
console.log(hello3(undefined, "sam"));


// 스프레드 연산자 사용
// 전달받은 매개변수를 배열로 사용
function add2(...nums: number[]){
  return nums.reduce((result,num) => result + num, 0);
}

add2(1,2,3);
add2(1,2,3,4,5,6,7,8,9,10);


// 매개변수로 this를 사용
// this가 매개변수의 첫번째 자리에 들어가야함
interface User2 {
  name: string;
}

const Sam:User2 = {name:"sam"}

function showName(this:User2, age:number, gender:"m"|"f"){
  console.log(this.name, age, gender);
}

const a1 = showName.bind(Sam);
a1(30, "m");



interface User3 {
  name: string;
  age: number;
}

// 함수 오버로드
// 전달받은 매개변수의 개수나 타입에 따라 다른 동작을 함
function join(name:string, age: number):User3;
function join(name:string, age: string):string;
function join(name:string, age: string | number):User3 | string {
  if(typeof age === "number") {
      return {
          name,
          age,
      }
  } else {
      return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User3 = join("sam",30);
const jane: string = join("jane","30")


// # 5 리터럴, 유니온/교차 타입
const userName1 = "Bob";
let userName2: string | number = "Tom";

// type으로 enum처럼 만들기
type Job = "police" | "debeloper" | "teacher";

interface User4 {
    name : string;
    job : Job;
} 

interface HighSchoolStudent {
    name : string;
    grade : 1 | 2 | 3;
}

const user: User4 = {
    name : "Bob",
    job: "student" //인터페이스에서 정의한 내용만 입력 가능
}

// Union types(유니온 타입) : or
// 식별 가능한 유니온 타입 : 동일한 속성의 타입을 다르게 해서 구분할 수 있는 것
interface Car6 {
    name : "car";
    color : string;
    start(): void;
}

interface Mobile{
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car6 | Mobile) {
    console.log(gift.color);
    if(gift.name === "car"){
        gift.start();       
    } else {
        gift.call();
    }
}

// Intersection types(교차 타입) : 여러 타입을 합쳐서 사용 and
interface Car7 {
    name: string;
    start(): void;
}

interface Toy3 {
    name: string;
    color: string;
    price: number;
}

const toyCar4: Toy3 & Car7 = {
    name: "타요",
    start(){},
    color: "blue",
    price: 100,
}

// # 6 클래스
// 클래스를 선언할 때, 멤버변수는 미리 선언해줘야 함
// 멤버 변수(member variable)는 메소드 밖에서 선언된 변수를 말한다. 메소드 안에 선언된 변수는 지역(local) 변수라고 한다

class Cart {
  color: string;
  constructor(color: string){
      this.color = color;
  }
  start(){
      console.log("start");
  }
}

const bmw = new Cart("red");

// 멤버변수를 미리 선언하지 않는 경우,
// 접근제한자, readonly 키워드 사용

// 접근제한자(Assess modifier) - public, private, protected
// public : 자식클래스, 클래스 인스턴스에서 접근 가능(아무것도 표시하지 않고 작성하면 모두 public임)
// protected : 자식클래스에서 접근 가능
// private, # : 해당 클래스 내부에서만 접근 가능

class Cart1 {
  // private name: string = "car";
  // #name: string = "car";
  // protected name: string = "car";
  readonly name: string = "car";
  color: string;
  constructor(color: string){
      this.color = color;
  }
  start(){
      console.log("start")
      console.log(this.name);
  }
}

class Bmw extends Cart1 {
  constructor(color: string){
      super(color);
  }
  showName(){
      console.log(super.name);
  }
}

const z4 = new Bmw("black")
console.log(z4.name)
z4.name = "zzzz";

// readonly 변수를 바꾸려면 constructor 내부에서 바꿔야함
// static으로 선언된 정적 멤버변수나 메서드는 this 키워드가 아니라 클래스 명으로 접근해야함
class Cart2 {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string){
      this.color = color;
      this.name = name;
  }
  start(){
      console.log("start")
      console.log(this.name);
      console.log(Cart2.wheels)
  }
}

class Bmw1 extends Cart2 {
  constructor(color: string, name:string){
      super(color, name);
  }
  showName(){
      console.log(super.name);
  }
}

const z5 = new Bmw1("black", "z5")
console.log(z5.name)
console.log(Cart2.wheels)

// 추상 class
abstract class Cart3 {
  color: string;
  constructor(color:string){
      this.color = color;
  }
  strat(){
      console.log("Start");
  }
  abstract doSomething():void;
}

// 추상클래스는 new 키워드로 생성 불가
// const cart3 = new Cart3("red");  

// extends 키워드로 생성해야함
// 추상 클래스 내부의 추상 클래스는 반드시 상속 클래스 내부에서 구체적인 기능을 구현해야함
class Bmw3 extends Cart3 {
  constructor(color: string){
      super(color);
  }
  doSomething(){
      alert(3);
  }
}


