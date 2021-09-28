import { Box } from "@material-ui/core";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Header></Header>
      </Box>
      // mt = margin top, ml = margin left
      <Box mt={8} ml={5}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
