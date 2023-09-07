// 4.0 Classes

// 추상 클래스는 상속 받을 수만 있고
// 직접적으로 인스턴스를 만들지는 못함
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickName: string
  ) {}

  // 추상 메소드 : 상속받는 클래스가 구현해야 함
  abstract getNickName(): void;
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Palyer extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

// js
// class Palyer {
//     constructor(firstName, lastName, nickname) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.nickname = nickname;
//     }
// }

const gyuri = new Palyer("gyuri", "kim", "귤");

gyuri.firstName;
gyuri.nickName;
gyuri.getFullName();

// private vs protected
// private : 인스턴스 밖에서 접근할 수 없고, 다른 자식 클래스에서도 접근할 수 없음
// protected : 인스턴스 밖에서 접근할 수 없지만, 다른 자식 클래스에서는 접근할 수 있음
