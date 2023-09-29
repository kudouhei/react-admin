const tokens = {
  admin: 'admin-token',
  editor: 'editor-token',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (config) => {
    const { username } = JSON.parse(config.body);
    const token = tokens[username];
    if (!token) {
      return {
        status: 1,
        message: 'username or password wrong',
      };
    }
    return {
      status: 0,
      token,
    };
  },
  logout: (_) => {
    return {
      status: 0,
      data: 'success',
    };
  },
};
