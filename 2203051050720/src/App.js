import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortener from './components/URLShortener';
import URLStatistics from './components/URLStatistics';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">2203051050720 - URL Shortener</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<URLShortener />} />
          <Route path="/statistics" element={<URLStatistics />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
