import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from '../components/navbar.component.jsx';
import BottomNavBar from '../components/navbar_bottom.component.jsx';
import axios from 'axios';

import image from '../res/images/bg.jpg';
import MemoryCard from '../components/memoryCard.component.jsx';


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary:{
            main: "rgba(255, 255, 255, 0.7)"
        },
        secondary: {
            main: "#E9C46A"
        }
    },
  });


export default function Memories(props) {
  const [name, setName] = React.useState('');
  const [memories, setMemories] = React.useState([]);

  const loadData = async () => {
    await axios.get('http://localhost:2003/user/get-details', {withCredentials: true}).then((response) => {
      setName(response.data.name);
    });
    await axios.get('http://localhost:2003/memory/view-memory', {withCredentials: true})
    // .then((response) => response.json())
    .then((response) => {
      setMemories(response.data);
    });
  }

  React.useState(() => {
    loadData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar></NavBar>
      <main>
        {/* Hero unit */}
        <Box
          component="div"
          sx={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})` ,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -1000
          }}
        />
          <Container maxWidth="sm" sx={{pt: 12, pd: 8}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome ! <br></br>{name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            I am a passionate photographer who captures the beauty of life through the lens, turning moments into timeless art. My work is a visual storytelling that speaks volumes without words.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => {window.location = '/add-memory'}}>+ Add Memory</Button>
              <Button variant="outlined">Recent Memory</Button>
            </Stack>
          </Container>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {memories.map((memory) => (
              <Grid item key={memory._id} xs={12} sm={6} md={4}>
                <MemoryCard
                  _id={memory._id}
                  description={memory.description}
                  title={memory.title}
                  memory_image={memory.memory_image}
                  isEditing={false}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
            {/* </Box> */}
      </main>
      <BottomNavBar></BottomNavBar>
    </ThemeProvider>
  );
}