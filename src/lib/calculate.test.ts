import { expect, it } from 'vitest';
import { subtract, sum } from './calculate';

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('subtract 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});
