import { AddPostRequest, AuthenticationRequest } from './models';

export const createPostRequest = (req: AuthenticationRequest | AddPostRequest) => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  };
};