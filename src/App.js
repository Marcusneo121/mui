import * as React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';

// import Button from '@mui/material/Button';
// import { Add, Settings } from '@mui/icons-material';
// import { Typography } from '@mui/material';
// import styled from '@emotion/styled';

function App() {

  // const BlueButton = styled(Button)(
  //   ({ theme }) => ({
  //     backgroundColor: "skyblue",
  //     color: "#888",
  //     margin: 5,
  //     "&:hover": {
  //       backgroundColor: "lightblue",
  //     },
  //     "&:disabled": {
  //       backgroundColor: "gray",
  //       color: "white",
  //     }
  //   })
  // );


  // return (
  //   <div className="App">
  //     <Button variant="text">Text</Button>
  //     <Button
  //       startIcon={<Settings />}
  //       variant="contained"
  //       color='secondary'
  //       size='small'>
  //       Settings</Button>
  //     <Button
  //       startIcon={<Add />}
  //       variant="contained"
  //       color='success'
  //       size='small'>
  //       Add New Post</Button>
  //     <Button variant="outlined" disabled>
  //       Outlined
  //     </Button>
  //     <Typography variant="h1" component="p">
  //       h1. Heading
  //     </Typography>
  //     <Button
  //       variant='contained'
  //       sx={{
  //         backgroundColor: "skyblue",
  //         color: "#888",
  //         margin: 5,
  //         "&:hover": {
  //           backgroundColor: "lightblue",
  //         },
  //         "&:disabled": {
  //           backgroundColor: "gray",
  //           color: "white",
  //         }
  //       }}
  //     >My Unique Button</Button>
  //     <BlueButton>My Button</BlueButton>
  //     <BlueButton>Another Button</BlueButton>
  //   </div>
  // );

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );

}

export default App;
