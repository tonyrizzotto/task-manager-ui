import JWTManager from './JWTManager';

const authProvider = {
  // If successful, returns an access token that is saved in memory
  login: async ({ email, password }) => {
    return await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // should return 'true'
        return JWTManager.setToken(data.token);
      })
      .catch((err) => {
        Promise.reject('Authentication Failed');
      });
  },

  // verifies the JWT and allows access to the protected routes
  isAuthenticated: () => {
    return JWTManager.getToken() ? true : false;
  },
};

export default authProvider;
