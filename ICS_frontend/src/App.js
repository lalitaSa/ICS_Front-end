import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Sidebar from "./components/sidebar";

import SearchBox from "./components/search";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            {/* <Sidebar /> */}
            <SearchBox />
            
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            
            </Box>
            <Products />
          
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
