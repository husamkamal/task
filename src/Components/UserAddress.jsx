import { Box, Typography } from '@mui/material'
import React from 'react'
// import SimpleMap from './GoogleMap'
// import ExternalStateExample from './GoogleMap'
import Map from './GoogleMap'
import MapChart from './GoogleMap'

export default function UserAddress({data}) {
  return (
    <Box sx={{
        width:'50%',
        height: "85vh",
    }}>
       
        <Typography sx={{ color: "#545454" }} variant="h6" component="h2">
        Address
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            // justifyContent: "space-around",
            textAlign: "left",
            "> span": {
              color: "#9A9A9A",
              width: "8rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>Street : </span> {data.street}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            // justifyContent: "space-between",
            "> span": {
              color: "#9A9A9A",
              width: "8rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>Suite : </span>{data.suite}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            // justifyContent: "space-between",
            "> span": {
              color: "#9A9A9A",
              width: "8rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>City : </span> {data.city}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            // justifyContent: "space-between",
            "> span": {
              color: "#9A9A9A",
              width: "8rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>Zipcode : </span>{data.zipcode}
        </Typography>
      <MapChart />
    </Box>
  )
}
