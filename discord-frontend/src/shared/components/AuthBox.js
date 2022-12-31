import React from "react";
// passing different props
import Box from "@mui/material/Box";
// possiblity to create multiple components
import { styled } from "@mui/system";

// In react we can create multiple component and use it anywhere we want

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "5px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "coloumn",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
