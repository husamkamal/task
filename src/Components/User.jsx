import { Box } from '@mui/material'
import React from 'react'

export default function User({userName, src}) {
  return (
    <Box className='user'>
        <Box className='user_wrapper'>
            <img style={{borderRadius:'50%',width:'2rem', height:'2rem'}} src={src} alt={userName} />
            <p>{userName}</p>
        </Box>
    </Box>
  )
}
