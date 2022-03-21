import { Card, CardContent, Typography } from '@mui/material';
import { BlogPost } from './PostsSlice';
import { useStyles } from '../theme/theme';

function Post(props: { post: BlogPost }) {
  const classes = useStyles();
  return (
    <Card className={classes.blogPost}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {props.post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.post.dateTime?.toString()}
        </Typography>
        <Typography variant='body2'>{props.post.content}</Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
