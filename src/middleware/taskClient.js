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
        if (!data.error) {
          user = { name: data.name, email: data.email };
        } else {
          return false;
        }
      })
      .catch((error) => {
        return error;
      });

    // returns a promise that must resolve to get data
    return user;
  },

  getTasks: async () => {
    let tasks = [];
    await fetch('/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWTManager.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        tasks = data;
      });

    return tasks;
  },

  newTask: async (task, cb) => {
    await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWTManager.getToken()}`,
      },
      body: JSON.stringify({
        description: `${task}`,
      }),
    }).then(
      taskClient.getTasks().then((res) => {
        console.log(res);
        cb(res);
      })
    );
  },
};

export default taskClient;
