import http from '../helpers/http';

const getTransactions = async () => http().get(`/transactions`);

const setTransaction = async data => http().post(`/transactions`, {...data});

export {setTransaction, getTransactions};
