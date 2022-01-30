import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Link to='/new-post'>
      <Button variant='contained' color='primary'>
        New post
      </Button>
    </Link>
  );
}

export default Home;
