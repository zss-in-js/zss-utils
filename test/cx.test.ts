import { cx } from '../src/utils/functions/cx';

test('cx returns a string', () => {
  const result = cx('test', '', false, undefined, 'abc');
  expect(result).toBe('test abc');
});
