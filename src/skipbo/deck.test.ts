import { Deck } from './deck';

test('deck is empty at the beginning', () => {
  const deck = new Deck();
  expect(deck.count).toBe(0);
});