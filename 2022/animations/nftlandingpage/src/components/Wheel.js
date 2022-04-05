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
    <Box sx={{ position: "relative", transform: "scale(0.7)" }}>
      <Box
        sx={{
          position: "absolute",
          left: 29,
          top: 32,
        }}
      >
        {" "}
        {/* <img src={Arrow} /> */}
        <BsFillArrowDownCircleFill size={60} />
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
        <img styles={{}} height={120} width={120} alt="" src={RoundTextBlack} />
      </Box>
    </Box>
  );
}

export default Wheel;
