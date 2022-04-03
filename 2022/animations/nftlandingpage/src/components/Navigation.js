import { Box, Typography } from "@mui/material";
import styles from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Box
      sx={{
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
          mb: 4,
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "ease 0.2s",
            }}
            color={"black"}
            fontSize={100}
            fontFamily={"Akaya Telivigala"}
          >
            w.
          </Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
          }}
        >
          <Box
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            Home
          </Box>
          <Typography
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            About
          </Typography>
          <Typography
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            Roadmap
          </Typography>
          <Typography
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            {" "}
            Showcase
          </Typography>
          <Typography
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            Team
          </Typography>
          <Typography
            className={styles.hover_underline}
            fontFamily={"sans-serif"}
            variant={"h6"}
            color={"#616060"}
            fontSize={18}
          >
            Faq
          </Typography>
        </Box>
        <Box>Button</Box>
      </Box>
    </Box>
  );
}

export default Navigation;
