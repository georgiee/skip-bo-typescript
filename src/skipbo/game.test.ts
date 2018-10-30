import { SkipboGame } from './game';
import { HAND_LIMIT_COUNT } from './player/player';
const NUM_PLAYERS = 3;
const DEFINED_CARD_SET = [
]

test('create specified amoubt of players', () => {
  const game = new SkipboGame(NUM_PLAYERS);

  expect(game.getPlayers()).toHaveLength(NUM_PLAYERS);
});

test('let each player draw expected amount of cards', () => {
  const EXPECTED_CARDS_PER_LAYER = 30;

  const game = new SkipboGame(NUM_PLAYERS);
  game.dealCards();

  const firstPlayer = game.getPlayers()[0];
  expect(firstPlayer.sizeStock).toBe(EXPECTED_CARDS_PER_LAYER);
});


test('has four building piles', () => {
  const BUILDING_PILESC_COUNT = 4;
  const game = new SkipboGame(NUM_PLAYERS);

  expect(game.getBuildingPiles()).toHaveLength(BUILDING_PILESC_COUNT);
});



test('assigns players after start', () => {
  const game = new SkipboGame(NUM_PLAYERS);
  game.start();

  expect(game.currentPlayer).toBeDefined();
});


test('first players draws hand cards', () => {
  const game = new SkipboGame(NUM_PLAYERS);
  game.start();
  const player = game.currentPlayer;

  expect(player.getHandCards()).toHaveLength(HAND_LIMIT_COUNT);
});
