import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Home Page
      </Typography>
      <Typography variant="body1">
        Welcome to the Home page!
      </Typography>
    </Container>
  );
};

export default Home;
