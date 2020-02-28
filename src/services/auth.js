import http from '../helpers/http';

const authUser = async data => http().post(`/auth`, {...data, group: 1});

const gatUserData = async () => http().get(`/auth/getProfile`);

export {authUser, gatUserData};
