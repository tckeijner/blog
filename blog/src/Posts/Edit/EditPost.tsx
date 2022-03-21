import { TextField, Button } from '@mui/material';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../../theme/theme';
import store from '../../state/store';
import { saveDraft } from '../PostsSlice';
import { AppState } from '../../state/reducers';
import { useNavigate } from 'react-router-dom';
import { clearPost } from '../PostsSlice';

function EditPost() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state: AppState) => state.posts.currentPost);

  function handleDraft() {
    dispatch(saveDraft(post));
    navigate('/home');
  }

  function handleDiscard() {
    dispatch(clearPost());
    navigate('/home');
  }

  return (
    <Provider store={store}>
      <div className={classes.content}>
        <TextField id='outlined-basic' label='Title' variant='outlined' />
        <TextField
          className={classes.contentField}
          id='filled-multiline-flexible'
          label='Edit content here'
          multiline
          minRows={20}
          // value={post.content}
          variant='outlined'
        />
        <div className={classes.buttonContainer}>
          <Button variant='contained' color='secondary' onClick={handleDiscard}>
            Discard
          </Button>
          <Button variant='outlined' color='primary' onClick={handleDraft}>
            Save draft
          </Button>
          <Button variant='contained' color='primary'>
            Publish
          </Button>
        </div>
      </div>
    </Provider>
  );
}

export default EditPost;
