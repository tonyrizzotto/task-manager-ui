// Controls functionality of a JWT and uses closure to hide the value
const JWTManager = () => {
  let currentJWT = null;

  const getToken = () => {
    return currentJWT;
  };

  const setToken = (token) => {
    currentJWT = token;
    return true;
  };

  const deleteToken = () => {
    currentJWT = null;
    return true;
  };

  return {
    getToken,
    setToken,
    deleteToken,
  };
};

export default JWTManager();
