export default class ErrorRepository {
  Constructor() {
    this.errRepo = new Map([
      [11, 'just error'],
      [12, 'minor issue'],
      [13, 'major problem'],
      [14, 'catastrophic failure']
    ]);
  }

  translate(code) {
    return this.errRepo.get(code) || 'Unknown error';
  }
}