import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import customLogger from '../middleware/logger';

const dummyStats = [
  {
    url: 'http://localhost:3000/abc123',
    created: '2025-06-23 12:00',
    expires: '2025-06-23 12:30',
    clicks: 5,
    clickData: [
      { time: '12:01', source: 'Chrome', geo: 'India' },
      { time: '12:05', source: 'Firefox', geo: 'US' },
    ],
  },
];

const URLStatistics = () => {
  customLogger('Viewing Statistics Page');

  return (
    <Paper sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        URL Statistics
      </Typography>
      <List>
        {dummyStats.map((stat, index) => (
          <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <ListItemText
              primary={`Short URL: ${stat.url}`}
              secondary={`Created: ${stat.created} | Expires: ${stat.expires} | Total Clicks: ${stat.clicks}`}
            />
            {stat.clickData.map((click, i) => (
              <Typography key={i} variant="body2" sx={{ marginLeft: 2 }}>
                - Time: {click.time}, Source: {click.source}, Geo: {click.geo}
              </Typography>
            ))}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default URLStatistics;
