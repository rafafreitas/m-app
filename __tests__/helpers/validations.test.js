import { onlyLetter } from '../../src/helpers';

describe('onlyLetter', () => {
  const testData = [
    {
      value: '123.456.78-90',
      expectedValue: '',
      testDescription: 'Deve imprimir VAZIO para a string 123.456.78-90'
    },
    {
      value: '08/10/1987',
      expectedValue: '',
      testDescription: 'Deve imprimir VAZIO para a string 08/10/1987'
    },
    {
      value: '@#8866hôuv**%',
      expectedValue: 'hôuv',
      testDescription: 'Deve imprimir "hôuv" para a string @#8866hôuv**%'
    },
    {
      value: 'Rafael Freitas123',
      expectedValue: 'Rafael Freitas',
      testDescription: 'Deve imprimir Rafael Freitas para a string Rafael Freitas123'
    },
    {
      value: '#@s',
      expectedValue: 's',
      testDescription: 'Deve imprimir "s" para a string #@s'
    }
  ];

  testData.forEach(item => {
    test(item.testDescription, () => {
      const onlyLetterParsed = onlyLetter(item.value);
      expect(onlyLetterParsed).toBe(item.expectedValue);
    });
  });
});