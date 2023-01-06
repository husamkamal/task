import { Box, Tab, Tabs } from '@mui/material';
import './dash.css'
import React from 'react'
import UserInfoAndAddress from '../../Components/UserInfoAndAddres';
import ProfileHead from '../../Components/ProfileHead';
import Loading from '../../Components/Loading';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding:'0px 1rem 0px 1rem',  width:'76vw', height:'97vh' }}>
          <ProfileHead />
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224,paddingTop:'1rem' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          background: 'transparent linear-gradient(195deg, var(--unnamed-color-2c65c8) 0%, var(--unnamed-color-702cc8) 100%) 0% 0% no-repeat padding-box',
          background:' transparent linear-gradient(195deg, #2C65C8 0%, #702CC8 100%) 0% 0% no-repeat padding-Box',
          borderRadius: '15px',
          width:'15.1rem',
          height:'38rem',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'  
        }}
        className='tabs'
      >
        <Tab sx={{alignItems:'flex-start', color:'white !important', borderBottom:'1px solid #fff ', paddingLeft:'0 !important'}} label="Profile" {...a11yProps(0)} />
        <Tab sx={{alignItems:'flex-start', color:'white !important', borderBottom:'1px solid #fff ', paddingLeft:'0 !important'}}  label="Posts" {...a11yProps(1)} />
        <Tab sx={{alignItems:'flex-start', color:'white !important', borderBottom:'1px solid #fff ', paddingLeft:'0 !important'}} label="Gallery" {...a11yProps(2)} />
        <Tab sx={{alignItems:'flex-start', color:'white !important', borderBottom:'1px solid #fff ', paddingLeft:'0 !important'}}  label="ToDo" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserInfoAndAddress />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Loading />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Loading />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Loading />
      </TabPanel>
    </Box>
  );

}
