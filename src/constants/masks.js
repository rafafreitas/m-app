const InputMask = {
  cpf: {type: 'cpf'},
  zipCode: {type: 'zip-code'},
  money: {type: 'money'},
  moneyWithoutPrefix: {type: 'money', settings: {unit: null}},
  celPhone: {type: 'cel-phone'},
  date: {
    type: 'datetime',
    settings: {
      format: 'DD/MM/YYYY'
    }
  }
};

export default InputMask;
