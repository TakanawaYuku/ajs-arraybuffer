import ArrayBufferConverter from '../arraybufferconverter';
import getBuffer from '../getbuffer';

test('Проверка загрузки данных.', () => {
  const input = new ArrayBufferConverter();
  input.load(getBuffer());

  expect(input.buffer).toEqual(getBuffer());
});

test('Проверка перевода загруженных данных в строку.', () => {
  const input = new ArrayBufferConverter();
  input.load(getBuffer());

  expect(input.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
