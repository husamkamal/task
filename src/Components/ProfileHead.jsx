import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../UsersJSON.json'

export default function ProfileHead() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [dataOfUser, setDataOfUser] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        const userData = data.users.filter(e=>{
            return e.id == id
        })
        setDataOfUser(userData[0])
    },[id])
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
    <Box sx={{display:'flex',alignItems:'center', height:'3rem', marginBottom:'0rem' , width:'100%',borderBottom:'1px solid #adadad', justifyContent:'space-between'}}>
        Profile
        <Box sx={{display:'flex',alignItems:'center', width:'8rem',justifyContent:'space-between'}}>
        <Avatar alt={dataOfUser.username} onClick={handleMenu} src={dataOfUser.profilepicture} />
        {dataOfUser.username}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem sx={{
                 width:'20rem',
                 height:'10rem',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                 }} onClick={handleClose}>
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'100%'}}>
                        <Avatar sx={{width:'5rem', height:'5rem'}} alt={dataOfUser.username} onClick={handleMenu} src={dataOfUser.profilepicture} />
                        <Typography vertical='h5' component='h5'> {dataOfUser.username}</Typography>
                        <Typography vertical='h6' component='h6'> {dataOfUser.email}</Typography>
                        <hr style={{width:'18rem'}} />
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link style={{textDecoration:'none', color:'black'}} to={`/dashboard/${data.users[1].id}`}>
                    <Box sx={{display:'flex',  alignItems:'center', justifyContent:'space-around', width:'10rem',margin:'auto'}}>
                    <Avatar alt={data.users[1].username} onClick={handleMenu} src={data.users[1].profilepicture} />
                    <Typography vertical='h5' component='h5'>{data.users[1].name}</Typography>
                    </Box>
                </Link>
                </MenuItem>
                    <hr style={{width:'18rem'}} />
                <MenuItem onClick={handleClose}>
                <Link style={{textDecoration:'none', color:'black'}} to={`/dashboard/${data.users[2].id}`}>
                    <Box sx={{display:'flex',  alignItems:'center', justifyContent:'space-around', width:'10rem',margin:'auto'}}>
                    <Avatar alt={data.users[1].username} onClick={handleMenu} src={data.users[2].profilepicture} />
                    <Typography vertical='h5' component='h5'> {data.users[1].name}</Typography>
                    </Box>
                    </Link>
                </MenuItem>
                    <Box sx={{width:'18rem', display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                <Button sx={{}} color='error' variant='contained' ><Link style={{textDecoration:'none', color:'white'}} to='/'>Sign out</Link></Button>
                </Box>
              </Menu>
                  </Box>
    </Box>
  )
}
