
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ColorsCarousel from './components/ColorsCarousel/ColorsCarousel';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <ColorsCarousel/>
      </Container>
    </>
  );
}

export default App;
