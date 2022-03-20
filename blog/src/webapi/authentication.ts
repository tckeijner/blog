import { BASE_URL } from './apiConfig';
import { AuthenticationRequest } from './models';
import { createPostRequest } from './utils';

export const registerUser = async (req: AuthenticationRequest) => {
  const res = await fetch(BASE_URL + '/registerUser', createPostRequest(req));
  const data = await res.json();
  return console.log(data);
};

export const requestAuthToken = async (req: AuthenticationRequest) => {
  const res = await fetch(BASE_URL + '/login', createPostRequest(req));
  const data = await res.json();
  return data.auth_token;
};
