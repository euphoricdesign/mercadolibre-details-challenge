import React from "react";
import {Container, Box} from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
      </Box>
    </>
  );
};

export default App;
