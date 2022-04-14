import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Typography, Button, Box } from "@mui/material";
import { keyframes } from "@mui/system";
import RoundTextBlack from "../assets/Rounded.png";
function Wheel() {
  const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
  return (
    <Box sx={{ transform: "scale(0.9)" }}>
      <Box
        sx={
          {
            // position: "absolute",
            // left: 28,
            // top: 28,
          }
        }
      >
        {" "}
        {/* <img src={Arrow} /> */}
        <BsFillArrowDownCircleFill size={50} />
      </Box>
      <Box
        sx={{
          border: 1,
          borderRadius: "100%",
          position: "absolute",
          animation: `${spin}  8s infinite linear`,
        }}
      >
        {" "}
        <img styles={{}} height={100} width={100} alt="" src={RoundTextBlack} />
      </Box>
    </Box>
  );
}

export default Wheel;
