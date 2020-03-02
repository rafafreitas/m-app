import {formatAsCurrency, formatCurrencyToFloat} from '../../src/helpers';

describe('Currency', () => {
  test('Deve retornar um valor formatado como moeda', () => {
    expect(formatAsCurrency(2.5)).toBe('2,50');
    expect(formatAsCurrency(2)).toBe('2,00');
    expect(formatAsCurrency(0.5)).toBe('0,50');
  });
  test('Deve retornar o valor formatado para float', () => {
    expect(formatCurrencyToFloat('2,50')).toBe(2.5);
    expect(formatCurrencyToFloat('2,00')).toBe(2);
    expect(formatCurrencyToFloat('0,50')).toBe(0.5);
  });
});
