export default class ErrorRepository {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.keys = new Map([
      [11, 'just error'],
      [12, 'minor issue'],
      [13, 'major problem'],
    ]);

    this.keys.set({
      key,
      value,
    });
  }

  translate(code) {
    let result;
    if (this.keys.has(code)) {
      result = this.keys.get(code);
    } else {
      result = 'Unknown error';
    }
    return result;
  }
}