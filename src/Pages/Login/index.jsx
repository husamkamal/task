import { Box, Container, Typography } from '@mui/material';
import './login.css'
import User from '../../Components/User';
import data from '../../UsersJSON.json';
import { Link } from 'react-router-dom';

export default function Login() {
    
    return (
        <Box>
        <Box className='back'>

        </Box>
    <Box className='container' >
      <Box className='header'>
        <Typography sx={{
            color:'#4A4A4A',
            opacity: 1,
        }} variant='p' component='p'>
        Select an account
        </Typography>
      </Box>
      <Box className='table_body'>
      <User/>
      {data.users.map(e=>{
          return <Link className='user' style={{textDecoration:'none', color:'#4A4A4A'}} key={e.id} to={`dashboard/${e.id}`}><User  userName={e.username} src={e.profilepicture} /></Link>
      })}
        
      </Box>
    </Box>
    </Box>
  );
}