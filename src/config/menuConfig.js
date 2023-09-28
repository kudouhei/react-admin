const menuList = [
  {
    title: 'Home',
    path: '/home',
    meta: {
      icon: 'home',
      isPublic: true,
      hidden: false,
      roles: ['admin'],
    },
  },
  {
    title: 'Doc',
    path: '/doc',
    meta: {
      icon: 'home',
      isPublic: true,
      hidden: true,
      roles: ['editor'],
    },
  },
];
export default menuList;
