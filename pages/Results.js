import React from "react";
import { Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "50%",
  bgcolor: "#FFF0D9",
  borderRadius: "40px",
  boxShadow: 24,
  p: 7,
  color: "#585379",
};

function Results({ data }) {
  return (
    <div>
      <Box sx={style}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lato" }}
        >
          Results
        </Typography>
        {JSON.stringify(data)}
        <Typography sx={{ mt: 2, fontSize: 20, fontFamily: "Lato" }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </div>
  );
}

export default Results;
