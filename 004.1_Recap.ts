// 4.1 Recap

// object의 Type을 선언할 때 사용
// type Words = {
//   [key: string]: string;
// };

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }

//   // 클래스를 타입처럼 쓸 수 있음
//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(term: string) {
//     return this.words[term];
//   }
// }

// class Word {
//   constructor(public term: string, public def: string) {}
// }

// const kimchi = new Word("kimchi", "한국의 음식");

// const dict = new Dict();

// console.log(dict.add(kimchi));
// console.log(dict.def("kimchi"));
