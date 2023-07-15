'use client'
import * as React from 'react';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import saveResponseToDB from '@utils/indexedDb';

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      // .then((data) => saveResponseToDB(data))
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <section className='home'>
      <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }} className='list'>
        {data && (
          data.map((item) => (
            <Link
              key={item.id}
              href={`/user/${item.id}`}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.company.name} - 
                      </Typography>
                      {item.company.catchPhrase}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Link>
          ))
        )}
      </List>
    </section> 
  )
}
