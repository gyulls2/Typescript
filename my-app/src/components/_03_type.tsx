import React from "react";

const prac01 = () => {
  // # 1. 타입스크립트 문법

  // 변수에 타입 지정 가능
  // string, number, boolean, null, undefined, bigint, [], {} 등
  let name: string = "gyull";

  // array 타입 지정
  let arr: string[] = ["apple", "banana"];

  // object 타입 지정
  let obj: { name: string } = { name: "gyull" };
  let obj2: { name?: string } = {}; // ?사용하면 속성을 옵셔널로 지정

  // Union type
  // 다양한 타입 지정 가능
  let age: string | number = 30;

  // Type alias
  // 타입을 변수에 담아 쓸 수 있음
  // type 키워드 사용
  // 타입명 작명 시 보통 첫 문자를 대문자로 씀
  type MyType = string[] | number;
  let age2: MyType = 30;

  // 함수 타입 지정
  // 파라미터로 number, return값으로 number를 받는 함수
  function add(x: number): number {
    return x * 2;
  }

  // array에 쓸 수 있는 tuple 타입
  type Fruits = [string, number];
  let apple: Fruits = ["apple", 3000];

  // object에 타입을 지정해야 할 속성이 너무 많으면 key 사용
  // 글자로 된 모든 object 속성의 타입은 string
  type User = {
    [key: string]: string;
  };
  let gyull: User = {
    name: "gyull",
    age: "123",
  };

  // class 타입 지정 가능
  class User2 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  // 변수 생성시 타입스크립트가 타입을 자동으로 부여함
  // 타입지정 문법 생략가능
  let age3 = 123;

  // ===============================================
  // 실습문제

  // 01. 
  let 이름: string = "gyull";
  let 나이: number = 123;
  let 출생지역: string = "busan";

  // 02. 
  let playList: { [key: string]: string } = {
    아이브: "after like",
    르세라핌: "antifragile",
  };

  let playList2: { song: string; singer: string } = {
    song: "after like",
    singer: "아이브",
  };

  // 03. object 타입 지정
  let project: { member: string[]; days: number; started: boolean } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
  };

  return <div></div>;
};

export default prac01;
