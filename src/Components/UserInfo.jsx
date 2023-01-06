import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function UserInfo({data}) {
  return (
    <Box
      sx={{
        width: "48%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "87vh",
        borderRight:'1px solid #adadad'
      }}
    >
      <Avatar
        alt={data.username}
        src={data.profilepicture}
        sx={{ width: 150, height: 150 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "40%",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ color: "#545454" }} variant="h6" component="h2">
          {data.name}
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
          <span>username : </span> {data.username}
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
          <span>email : </span>{data.email}
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
          <span>Phon : </span> {data.phone}
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
          <span>Website : </span>{data.website}
        </Typography>
      </Box>
      <hr style={{ width: "70%" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "30%",
          justifyContent: "space-around",
          width:'90%',
        //   background:'blue'
        }}
      >
        <Typography sx={{ color: "#545454" }} variant="h6" component="h2">
          Company
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            textAlign: "left",
            "> span": {
              width: "10rem",
              color: "#9A9A9A",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>Name : </span> {data.company.name}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            "> span": {
              color: "#9A9A9A",
              width: "13rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>catchphrase : </span>{data.company.catchPhrase}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            color: "#545454",
            display: "flex",
            // justifyContent: "space-between",
            "> span": {
              color: "#9A9A9A",
              width: "12rem",
              textAlign: "right",
              paddingRight: "1rem",
            },
          }}
          variant="h6"
          component="h2"
        >
          <span>bs : </span> {data.company.bs}
        </Typography>
      </Box>
    </Box>
  );
}
