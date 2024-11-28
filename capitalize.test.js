import { capitalize } from './capitalize';

it('Capitalize all lower case word', () => {
  expect(capitalize('hello')).toMatch('Hello');
});
it('Capitalize all upper case word', () => {
  expect(capitalize('HELLO')).toMatch('Hello');
});
it('Capitalize mix of upper and lower case', () => {
  expect(capitalize('hElLO')).toMatch('Hello');
});
it('Capitalize with numbers', () => {
  expect(capitalize('hello5')).toMatch('Hello5');
});
it('Capitalize with special characters', () => {
  expect(capitalize('hello!')).toMatch('Hello!');
});
