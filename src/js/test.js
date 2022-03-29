import demo from './app';

test('', () => {
  const result = demo('hi');
  expect(result).toBe('hi');
});
