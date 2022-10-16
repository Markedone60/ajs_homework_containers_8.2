import ErrorRepository from '../app';

test.each([
  [11, 'just error'],
  [12, 'minor issue'],
  [13, 'major problem'],
  [14, 'catastrophic failure']
]) ('testing each error within Map container', (code, desc) => {
  expect(new ErrorRepository().translate(code)).toBe(desc);
})
