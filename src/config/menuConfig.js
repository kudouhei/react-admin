const menuList = [
  {
    title: 'Home',
    path: '/home',
    meta: {
      icon: 'home',
      roles: ['admin'],
    },
  },
  {
    title: 'Doc',
    path: '/doc',
    meta: {
      icon: 'home',
    },
    children: [
      {
        title: '404',
        path: '/error/404',
        meta: {
          icon: 'home',
        },
      },
    ],
  },
];
export default menuList;
