import { BlogPost } from '../Posts/PostsSlice';

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AddPostRequest {
  authenticationToken: string;
  post: BlogPost;
}
