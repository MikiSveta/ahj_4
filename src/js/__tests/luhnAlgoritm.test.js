import checkLuhn from '../luhnAlgorithm';

test('card should be valid', () => {
  const card = '5536913839983273';
  expect(checkLuhn(card)).toBe(true);
});

test('card should not be valid', () => {
  const card = '5536502';
  expect(checkLuhn(card)).toBe(false);
});
