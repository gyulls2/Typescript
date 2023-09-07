// .d.ts 파일(정의 파일)을 통해 JS 패키지가 어떻게 생겼는지
// 타입을 설명해 줘야 타입스크립트가 읽을 수 있다.

interface Config {
  url:string
}

declare module "myPackage" {
  function init(config:Config) : boolean;
  function exit(code:number) : number;
}