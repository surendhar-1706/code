import { Box, Typography } from "@mui/material";
import { textTransform } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "linear 0.2s",
            }}
            color={"black"}
            fontFamily={"Akaya Telivigala"}
            fontSize={72}
            variant={"inherit"}
          >
            w.
          </Typography>
        </Link>
        <Box>Menu</Box>
        <Box>Button</Box>
      </Box>
      <Typography>Home</Typography>
      <Typography>About</Typography>
      <Typography>Roadmap</Typography>
      <Typography>Showcase</Typography>
      <Typography>Team</Typography>
      <Typography>Faq</Typography>
    </Box>
  );
}

export default Navigation;
