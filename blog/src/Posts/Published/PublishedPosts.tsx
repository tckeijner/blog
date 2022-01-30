import { Provider, useSelector } from 'react-redux';
import Post from '../Post';
import { BlogPost } from '../PostsSlice';
import { AppState } from '../../state/reducers';
import store from '../../state/store';

function Posts() {
  const posts: Array<BlogPost> = useSelector(
    (state: AppState) => state.posts.publishedPosts
  );

  return (
    <Provider store={store}>
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </Provider>
  );
}

export default Posts;
