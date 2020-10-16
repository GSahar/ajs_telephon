import Validator from '../basic';

test('telephon 1', () => {
  const telephone = '8 (927) 000-00-00';
  const getTelephon = new Validator(telephone);

  const result = getTelephon.clearTelephon();

  expect(result).toEqual('+79270000000');
});

test('telephon 2', () => {
  const telephone = '+7 960 000 00 00';
  const getTelephon = new Validator(telephone);

  const result = getTelephon.clearTelephon();

  expect(result).toEqual('+79600000000');
});

test('telephon 3', () => {
  const telephone = '+86 000 000 0000';
  const getTelephon = new Validator(telephone);

  const result = getTelephon.clearTelephon();

  expect(result).toEqual('+860000000000');
});
