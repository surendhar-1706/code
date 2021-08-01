import React, { useState } from "react";

function CheckAuth({ Component }) {
  const [verified, setverified] = useState(true);
  if (verified) {
    return { Component };
  }

  return "null";
}

export default CheckAuth;
