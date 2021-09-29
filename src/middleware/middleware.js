// Try returns an access token that is save in local storage
export async function login(data) {
  return await fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('task-access-token', data.token);
      localStorage.setItem(
        'task-access-token-expiration',
        Date.now() + 2 * 60 * 60 * 1000
      );
    })
    .catch((err) => {
      Promise.reject('Authentication Failed');
    });
}

export function checkAuthentication() {
  return (
    localStorage.getItem('task-access-token') &&
    localStorage.getItem('task-access-token-expiration') > Date.now()
  );
}
