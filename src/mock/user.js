const users = {
  'admin-token': {
    role: 'admin',
    name: 'admin',
  },
  'editor-token': {
    role: 'editor',
    name: 'editor',
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userInfo: (config) => {
    const token = config.body;
    const userInfo = users[token];
    if (!userInfo) {
      return {
        status: 1,
        message: 'Failed to get user information',
      };
    }
    return {
      status: 0,
      data: userInfo,
    };
  },
};
