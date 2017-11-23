// taken from: http://gkibria.com/2017/03/04/webpack-way-of-using-dynamic-api-endpoints-based-on-environment/
const IS_LOCAL = process.env.NODE_ENV !== 'production';

const API_BASE_URL = IS_LOCAL ? 'http://localhost:8000/api' : 'https://paguenpo.cl/api';

const LOGIN_URL = `${API_BASE_URL}/token-auth/`;

export default {
  IS_LOCAL, API_BASE_URL, LOGIN_URL,
};
