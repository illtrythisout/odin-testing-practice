import { calculator } from './calculator';

it('Add 2 numbers', () => {
  expect(calculator.add(2, 5)).toBe(7);
});
it('Add 2 floats', () => {
  expect(calculator.add(2.5, 2.5)).toBe(5);
});
it('Subtract 2 numbers', () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
});
it('Subtract 2 floats', () => {
  expect(calculator.subtract(2.5, 2.5)).toBe(0);
});
it('Multiply 2 numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});
it('Multiply 2 floats', () => {
  expect(calculator.multiply(2.5, 2.5)).toBe(6.25);
});
it('Divide 2 numbers', () => {
  expect(calculator.divide(2, 5)).toBe(0.4);
});
it('Divide 2 floats', () => {
  expect(calculator.divide(2.5, 2.5)).toBe(1);
});
