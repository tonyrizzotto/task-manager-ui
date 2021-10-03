import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Controls functionality of a JWT and uses closure to hide the value
const JWTManager = () => {
  const getToken = () => {
    try {
      return cookies.get('tm-access').token;
    } catch (e) {
      return null;
    }
  };

  const setToken = (token) => {
    cookies.set(
      'tm-access',
      { token: token },
      {
        path: '/',
        maxAge: 60000,
      }
    );
    return true;
  };

  const deleteToken = () => {
    cookies.remove('tm-access');
    return true;
  };

  return {
    getToken,
    setToken,
    deleteToken,
  };
};

export default JWTManager();
