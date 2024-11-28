import { caesarCipher } from './caesarCipher';

it('Shift all lower case word', () => {
  expect(caesarCipher('abc', 3)).toMatch('def');
});
it('Shift all upper case word', () => {
  expect(caesarCipher('ABC', 3)).toMatch('DEF');
});
it('Shift mix of upper and lower case', () => {
  expect(caesarCipher('AbC', 3)).toMatch('DeF');
});
it('Shift with numbers', () => {
  expect(caesarCipher('a2c', 3)).toMatch('d2f');
});
it('Shift with special characters', () => {
  expect(caesarCipher('a!c', 3)).toMatch('d!f');
});
it('Shift at the end of the alphabet', () => {
  expect(caesarCipher('xyZ', 3)).toMatch('abC');
});
