class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

import { init, exit } from "./myPackage";
init({
  debug: true,
  url: "true",
});

exit(1);

localStorage;
