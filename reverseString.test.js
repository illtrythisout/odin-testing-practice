import { reverseString } from './reverseString';

it('Reverse all lower case word', () => {
  expect(reverseString('hello')).toMatch('olleh');
});
it('Reverse all upper case word', () => {
  expect(reverseString('HELLO')).toMatch('OLLEH');
});
it('Reverse mix of upper and lower case', () => {
  expect(reverseString('hElLO')).toMatch('OLlEh');
});
it('Reverse with numbers', () => {
  expect(reverseString('hello5')).toMatch('5olleh');
});
it('Reverse with special characters', () => {
  expect(reverseString('hello!')).toMatch('!olleh');
});
