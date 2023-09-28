import { setUserToken, resetUser } from './user';
import { reqLogin, reqLogout } from '@/api/login';
import { setToken, removeToken } from '@/utils/auth';
import { message } from 'antd';

export const login = (username, password) => {
  return async (dispatch) => {
    reqLogin({ username: username.trim(), password: password }).then(
      (response) => {
        const { data } = response;
        if (data.status === 0) {
          const token = data.data;
          dispatch(setUserToken(token));
          setToken(token);
          message.success('success');
        } else {
          const msg = data.message;
          message.error(msg);
        }
      }
    );
  };
};

export const logout = (token) => {
  return async (dispatch) => {
    reqLogout(token).then((response) => {
      const { data } = response;
      if (data.status === 0) {
        dispatch(resetUser());
        removeToken();
      } else {
        const msg = data.msg;
        message.error(msg);
      }
    });
  };
};
