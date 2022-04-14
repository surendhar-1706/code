import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100ww",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "lightblue",
      }}
    >
      <Typography>About</Typography>
    </Box>
  );
}

export default About;
