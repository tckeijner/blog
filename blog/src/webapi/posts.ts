import { BASE_URL } from './apiConfig';
import { AddPostRequest } from './models';
import { createPostRequest } from './utils';

export const addPost = async (req: AddPostRequest) => {
  const res = await fetch(BASE_URL + '/addPost', createPostRequest(req));
  console.log(res);
};
