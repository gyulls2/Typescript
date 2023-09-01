// 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: 사전 단어를 모두 보여줌.
// count: 사전 단어들의 총 갯수를 리턴함.
// upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
// exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
// bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]

// bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  // 클래스를 타입처럼 쓸 수 있음
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  _delete(term: string) {
    return delete this.words[term];
  }
  update(term: string, def: string) {
    return (this.words[term] = def);
  }
  showAll() {
    return console.log(Object.keys(this.words));
  }
  count() {
    return console.log(Object.keys(this.words).length);
  }
  upsert(term: string, def: string) {
    if (this.words[term] === undefined) {
      return this.add(new Word(term, def));
    } else return this.update(term, def);
  }
  exists(term: string) {
    return console.log(Object.keys(this.words).includes(term));
  }
  bulkAdd(array: { term: string; definition: string }[]) {
    array.forEach((item) => {
      this.add(new Word(item.term, item.definition));
    });
  }
  bulkDelete(array: string[]) {
    array.forEach((item) => this._delete(item));
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const apple = new Word("apple", "사과입니다.");

const dict = new Dict();

//

dict.add(kimchi);
dict.add(apple);

dict.update("kimchi", "김치입니다.");
dict.upsert("kimchi", "김치일까요??");
dict.upsert("banana", "바나나지롱");

// dict.exists("banana")
// dict.exists("tomato")

dict.bulkAdd([
  { term: "김치", definition: "대박이네~" },
  { term: "아파트", definition: "비싸네~" },
]);
dict.bulkDelete(["김치", "아파트"]);

// console.log(dict.def("kimchi"));
// dict._delete("kimchi")

console.log(dict);
