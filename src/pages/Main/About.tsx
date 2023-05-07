import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        About Page
      </Typography>
      <Typography variant="body1">
        This is the About page.
      </Typography>
    </Container>
  );
};

export default About;
