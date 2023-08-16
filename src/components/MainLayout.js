import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Tabs, Tab, Avatar } from '@mui/material';
import Image from 'next/image';
import Link from "next/link";


// Define a dummy user
const user = {
  name: 'Enoch Maonga',
  avatarUrl: '/user-avatar.png', // Provide the URL for the user's avatar
};

function MainLayout({ children }) {
  return (
    <div>
      <AppBar position="fixed" sx={{width: "100%", height: 80, left: 0, right: 0, top: 0, backgroundColor: "#64b5f6"}}>
        <Toolbar
      sx={{
        minHeight: "90px !important",
        paddingLeft: "29px !important",
        paddingRight: "29px !important",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/eswa1.png"
              width={90}
              height={70}
              alt="logo"
             
            />
           
        </div>
          <Tabs
          value={false} 
          variant="fullWidth"
          aria-label="navigation tabs"
          sx={{ justifyContent: "flex-end", mr:0}}
          textColor='white'
        >
          <Tab label="Home" component={Link} href="/" />
          <Tab label="Login" component={Link} href="/login" />
          <Tab label="Loans" component={Link} href="/loans" />
          <Tab label="Account" component={Link} href="/account" />
          <Tab label="Repay" component={Link} href="/repayment" />
        </Tabs>
        <Avatar
            alt={user.name}
            src={user.avatarUrl}
            sx={{ width: 32, height: 32, cursor: 'pointer' }}
          />
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <p>&copy; {new Date().getFullYear()} Eswa</p>
      </footer>
    </div>
  );
};

export default MainLayout;