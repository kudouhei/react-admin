import Home from '../views/home';
import Doc from '../views/doc';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: '/home', title: 'Home', component: Home, roles: ['admin', 'editor'] },
  { path: '/doc', title: 'Doc', component: Doc, roles: ['admin', 'editor'] },
];
