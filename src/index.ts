export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  static denger(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: brack background: yellow");
  }
}
