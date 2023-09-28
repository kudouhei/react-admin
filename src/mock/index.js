import Mock from 'mockjs';
import loginAPI from './login';
import userAPI from './user';

// login
Mock.mock(/\/login/, 'post', loginAPI.login);
Mock.mock(/\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/userInfo/, 'post', userAPI.userInfo);

export default Mock;
