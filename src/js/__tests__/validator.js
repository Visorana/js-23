import Validator from "../..";

test.each([
  // Test valid nicknames
  ['john_123doe', true],
  ['jane-smith', true],
  ['user123_abc', true],
  // Test nicknames with more than three consecutive digits
  ['user1234_abc', false],
  ['user_12345', false],
  // Test nicknames starting or ending with digits, dashes, or underscores
  ['123username', false],
  ['username123', false],
  ['-username', false],
  ['username-', false],
  ['_username', false],
  ['username_', false],
  // Test nicknames containing invalid characters
  ['user@name', false],
  ['user#name', false],
  ['user$name', false],
])('validateNickname returns correct result for nickname: "%s"', (nickname, expected) => {
  const validator = new Validator();
  const result = validator.validateUsername(nickname);
  expect(result).toEqual(expected);
});
