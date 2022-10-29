import React from 'react'
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <div>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ fontFamily: "fantasy", margin:15, alignItems: "center" }} variant="h2" >
        This web app for Book Store where, you can add, delete, Update and get all Books.
      </Typography>
      <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
        Technologies used are MERN
      </Typography>
    </Box>
  </div>
  )
}

export default About