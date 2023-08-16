import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PageContainer from './PageContainer';
import PageSection from './PageSection';
import { Paper, Typography } from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <PageSection>
        <PageContainer>
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '70vh' }}>
                <Grid item xs={12} sm={8} md={6} lg={4} >
                <Paper elevation={3} style={{ padding: '2rem', maxWidth: '300px', margin: ' auto' }}>
                    <Typography variant="h4" gutterBottom>
                      Login
                    </Typography>
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ marginBottom: '1rem' }}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ marginBottom: '1rem' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                      Login
                    </Button>
                  </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    </PageSection>
  ); 
};

export default LoginPage;