const BASE_URL = 'http://localhost:4000'

export const registerUser = async (req: AuthenticationRequest) => {
  const res = await fetch(BASE_URL + '/registerUser', createPostRequest(req));
  const data = await res.json();
  return console.log(data);
};

export const login = async (req: AuthenticationRequest) => {
  const res = await fetch(BASE_URL + '/login', createPostRequest(req));
  const data = await res.json();
  return console.log(data);
};

const createPostRequest = (req: AuthenticationRequest) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  }
}

interface AuthenticationRequest {
  email: string;
  password: string;
}
