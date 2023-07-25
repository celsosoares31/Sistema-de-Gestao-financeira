const formSubmit = document.querySelector('#register-form');

formSubmit.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.querySelector('#user');
  const password = document.querySelector('#password');
  // console.log(user.value, password.value);

  const response = await postData(user.value, password.value);

  const resp = await getAllData();
  console.log(resp);
});

const getAllData = async (req, res) => {
  const endpoint = 'http://localhost:8080/users';
  const resp = await fetch(endpoint);
  return resp.json();
};

const postData = async (user, password) => {
  const endpoint = 'http://localhost:8080/regist';
  const body = {
    name: user,
    password: password,
  };
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return resp.json();
};
