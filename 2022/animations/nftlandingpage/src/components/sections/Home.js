import { Typography, Button, Box } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

import nftvideo from "../../assets/Home Video.mp4";
// import Arrow from "../../assets/Arrow.svg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Wheel from "../Wheel";

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          px: 10,
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: "38%",
          }}
        >
          <Typography sx={{ fontFamily: "cursive" }} fontSize={48}>
            Discover A New Era Of Cool
          </Typography>
          <Box
            sx={{
              fontSize: 48,
              fontFamily: "Akaya Telivigala",
              width: "50%",
            }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="color: #FF0000;">APE KILLERS!</span>`
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span style="color:#0000FF;">NFTS.</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    `<span style="color:#FF8C00;">COLLECTIBLE ITEMS.</span>`
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </Box>
          <Typography sx={{ fontFamily: "Akaya Telivigala", fontSize: 24 }}>
            Bored Of Apes? Try Something New.
          </Typography>
          <Button
            variant="contained"
            sx={{
              "&:hover": {
                background: "black",
                transform: "scale(0.9)",
              },
              backgroundColor: "black",
              borderRadius: 20,
              px: 4,
              py: 1,
              transition: "ease 0.3s",
              textTransform: "none",
              letterSpacing: 3,
              my: 2,
            }}
          >
            Explore
          </Button>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "60%",
          }}
        >
          <video
            height={"70%"}
            width={"100%"}
            src={nftvideo}
            autoPlay
            muted
            loop
          ></video>
        </Box>
      </Box>
      {/* <Box sx={{ mt: 8, width: "100vw", display: "flex", ml: 7 }}>
        <Wheel />
      </Box> */}
    </Box>
  );
}

export default Home;
