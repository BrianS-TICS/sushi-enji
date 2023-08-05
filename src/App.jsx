import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, List, ListItem, ListItemButton, Paper } from "@mui/material";
import Image from "mui-image";
import zIndex from "@mui/material/styles/zIndex";
import Header from "../components/Header";

import { red } from '@mui/material/colors';

const primary = red[700]; // #f44336


function App() {
  return (
    <div className="">
      <Header />
      <section className="seccion-inicio">
        {/* Contenido hero */}
        <Box display="flex" justifyContent={"center"} alignItems={"center"} overflow={"hidden"}  >
          <Typography textAlign={"center"} variant="h3" color="white" position="absolute" zIndex={1} boxShadow={'initial'} >
            Nuestro Menú
          </Typography>
          <Image shift="left" height={"60vh"} src="img/menus/enji-foodmenu.jpg"
          />
        </Box>
      </section>
      {/* Contenido icons */}
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-around"} alignItems={"center"} mt={3}  >
          <Grid item variant="solid" >
            <Box sx={{ display: 'flex', mb: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image width={20} height={20} src="./img/arroz-enji.svg" alt="" />
            </Box>
            <Typography variant="caption" color={primary} >
              Platillos
            </Typography>
          </Grid>

          <Grid item variant="solid">
            <Box sx={{ display: 'flex', mb: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image width={20} height={20} src="./img/capeados.svg" alt="" />
            </Box>
            <Typography variant="caption" color="white">
              Capeados
            </Typography>
          </Grid>

          <Grid item variant="solid">
            <Box sx={{ display: 'flex', mb: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image width={20} height={20} src="./img/coctel.svg" alt="" />
            </Box>
            <Typography variant="caption" color="white">
              Cocteles
            </Typography>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
