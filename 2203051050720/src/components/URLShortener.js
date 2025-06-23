
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import customLogger from '../middleware/logger';

const URLShortener = () => {
  const [urlInput, setUrlInput] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = () => {
    if (!urlInput) {
      customLogger('Invalid input: Empty URL');
      alert('Please enter a valid URL');
      return;
    }

    // Simulated shortened URL
    const shortCode = Math.random().toString(36).substring(7);
    const newShortUrl = `http://localhost:3000/${shortCode}`;

    setShortenedUrl(newShortUrl);
    customLogger(`Shortened URL: ${newShortUrl}`);
  };

  return (
    <Paper sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Shorten URL
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Enter URL"
          fullWidth
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleShorten}>
          Shorten
        </Button>
      </Box>
      {shortenedUrl && (
        <Typography variant="body1">
          Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
        </Typography>
      )}
    </Paper>
  );
};

export default URLShortener;
