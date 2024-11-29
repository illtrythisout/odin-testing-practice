import { analyzeArray } from './analyzeArray';

it('positive numbers works', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
it('negative numbers works', () => {
  expect(analyzeArray([-8, 3, 4, -2, 6])).toEqual({
    average: 0.6,
    min: -8,
    max: 6,
    length: 5,
  });
});
