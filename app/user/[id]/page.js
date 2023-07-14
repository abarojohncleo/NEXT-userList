'use client';
import '@styles/globals.css'
import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'material-ui-image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const User = ({params}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const setUpData = async () => {
      console.log('params', params)
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      const data = await response.json(); 
      console.log('single data', data)
      setData(data)
    }
    setUpData();
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{height:'90vh', padding:'20px'}}>
        <Box sx={{ flexGrow: 1 }}>
          {data && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                  <Image
                    src='/assets/sample-profile-picture.png'
                    className='user_image'
                  />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" sx={{textAlign:'left'}}>{data.name}</Typography>
                {/* email address */}
                <Grid container spacing={2} sx={{margin:'10px'}}>
                  <Grid item xs={2} md={2}>
                    <AlternateEmailIcon />
                  </Grid>
                  <Grid item xs={10} md={10} sx={{textAlign:'left'}}>
                    {data.email}
                  </Grid>
                </Grid>
                {/* address */}
                <Grid container spacing={2} sx={{margin:'10px'}}>
                  <Grid item xs={2} md={2}>
                    <HomeIcon />
                  </Grid>
                  <Grid item xs={10} md={10} sx={{textAlign:'left'}}>
                    {`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}
                  </Grid>
                </Grid>
                {/* contact */}
                <Grid container spacing={2} sx={{margin:'10px'}}>
                  <Grid item xs={2} md={2}>
                    <ContactPhoneIcon />
                  </Grid>
                  <Grid item xs={10} md={10} sx={{textAlign:'left'}}>
                    {data.phone}
                  </Grid>
                </Grid>
                {/* website */}
                <Grid container spacing={2} sx={{margin:'10px'}}>
                  <Grid item xs={2} md={2}>
                    <LanguageIcon />
                  </Grid>
                  <Grid item xs={10} md={10} sx={{textAlign:'left'}}>
                    {data.website}
                  </Grid>
                </Grid>
                {/* business */}
                <Grid container spacing={2} sx={{margin:'10px'}}>
                  <Grid item xs={2} md={2}>
                    <BusinessIcon />
                  </Grid>
                  <Grid item xs={10} md={10} sx={{textAlign:'left'}}>
                    <Typography variant='h6'>{data.company.name}</Typography>
                    <Typography variant='subtitle2'><em>"{data.company.catchPhrase}"</em></Typography>
                    <Typography variant='subtitle2'>Services : {data.company.bs}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default User;