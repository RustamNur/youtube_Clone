import React, { useState } from "react";
import { Box } from "./navbar";
import { dataBase } from "../../mock";


const Navbar = () => {
 

  return (
    <Box>
      <Box.Btn>All</Box.Btn>
      <Box.Btn >Movie</Box.Btn>
      <Box.Btn>Sport</Box.Btn>
      <Box.Btn>Documantery</Box.Btn>
      <Box.Btn>Music</Box.Btn>
      <Box.Btn>Learn'Teach</Box.Btn>
      <Box.Btn>WildWorld</Box.Btn>
      <Box.Btn>Travel</Box.Btn>
      <Box.Btn>Cartoons</Box.Btn>
      <Box.Btn>Animation</Box.Btn>
      <Box.Btn>Computer Programming</Box.Btn>
    </Box>
  );
};

export default Navbar;
