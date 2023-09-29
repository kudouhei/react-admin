import axios from 'axios';
import store from '@/store';
import { Modal } from 'antd';
import { getToken } from '@/utils/auth';
import { logout } from '@/store/actions';

// create axios instance
const service = axios.create({
  baseURL: '',
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.getState().user.token) {
      config.headers.Authorization = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('error info' + error);
    const { status } = error.response;
    if (status === 403) {
      Modal.confirm({
        title: 'confirm logout?',
        content:
          'Due to a long period of inactivity, you have been logged out, you can cancel to remain on the page, or log in again',
        okText: 'login again',
        cancelText: 'cancel',
        onOk() {
          let token = store.getState().user.token;
          store.dispatch(logout(token));
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    return Promise.reject(error);
  }
);

export default service;
