import http from '../helpers/http';

const getTransactionsLimit = async limit => http().get(`/transactions/${limit}`);

const getTransactionsDetails = async () => http().get(`/transactions/list/details`);

const getBalance = async () => http().get(`/transactions/balance/details`);

const setTransaction = async data => http().post(`/transactions`, {...data});

export {setTransaction, getTransactionsLimit, getTransactionsDetails, getBalance};
