import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo'
import UserAddress from './UserAddress'
import { useParams } from 'react-router-dom'
import data from '../UsersJSON.json';
import Loading from './Loading'

export default function UserInfoAndAddress() {
    const [dataOfUser, setDataOfUser] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        const userData = data.users.filter(e=>{
            return e.id == id
        })
        setDataOfUser(userData[0])
    },[id])
    if(!dataOfUser.id) return <Loading />
    return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <UserInfo data={dataOfUser} />
        <UserAddress data={dataOfUser.address} />
    </Box>
  )
}
