import React from 'react'
import { Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'

export default function MuiVsBootstrap() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Material UI vs Bootstrap
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        A short, practical comparison between two popular UI libraries/frameworks for React.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Material UI (MUI)
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Component-first, very React-friendly API" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Built-in theming and styling with Emotion" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CloseIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Smaller ecosystem of pre-made templates than Bootstrap" />
              </ListItem>
            </List>

            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">Learn more</Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Bootstrap
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Mature CSS framework with many templates" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Easy to use via classes, faster prototyping" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CloseIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Less tailored to React component patterns" />
              </ListItem>
            </List>

            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" color="secondary">Examples</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        My takeaway
      </Typography>

      <Typography paragraph>
        Use MUI when you want a component-centric, themeable, React-first library with lots of prebuilt React components.
        Use Bootstrap when you prefer a classic CSS utility-driven approach, fast prototyping, and a large template ecosystem.
      </Typography>
    </Container>
  )
}
