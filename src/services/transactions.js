import http from '../helpers/http';

const getTransactionsLimit = async limit => http().get(`/transactions/${limit}`);

const setTransaction = async data => http().post(`/transactions`, {...data});

export {setTransaction, getTransactionsLimit};
