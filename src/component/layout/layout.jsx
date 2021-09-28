import { Box } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
// If someone wants to use this layout, he needs to provide value to children property
const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      // mt = margin top, ml = margin left
      <Box mt={8} ml={5}>
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = propTypes;
export default Layout;
