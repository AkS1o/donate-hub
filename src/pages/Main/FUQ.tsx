import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';

const FAQ: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1">
        Here are some common questions and answers.
      </Typography>
    </Container>
  );
};

export default FAQ;
