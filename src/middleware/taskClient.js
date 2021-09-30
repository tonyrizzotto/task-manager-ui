import JWTManager from './JWTManager';

// Used to Manage API requests from Frontend
const taskClient = {
  // Fetches a users Profile information
  getUser: async () => {
    let user = {};
    await fetch('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWTManager.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        user = { name: data.name, email: data.email };
      });

    // returns a promise that must resolve to get data
    return user;
  },
};

export default taskClient;
