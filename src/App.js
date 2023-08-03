import { useMemo } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

import { Wallets } from './components/wallet'

import { SnackbarProvider } from 'notistack';

function App() {

// I will try to start with new project
// this project is so stressful
  return (
    <BrowserRouter>
      <Box paddingY={6} paddingX={2}>
        <SnackbarProvider>
          <Wallets>
            <Home />
          </Wallets>
        </SnackbarProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
