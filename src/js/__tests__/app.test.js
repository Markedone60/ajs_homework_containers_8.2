import ErrorRepository from '../app';

test('Checking description', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(11)).toBe('just error');
});

test('Checking error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(111)).toBe('Unknown error');
});
