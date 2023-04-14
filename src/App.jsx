import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, List, ListItem, ListItemButton, Paper } from "@mui/material";
import Image from "mui-image";
import zIndex from "@mui/material/styles/zIndex";
import Header from "../components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <section className="seccion-inicio">
        {/* Contenido hero */}
        <Box display="flex" justifyContent={"center"} alignItems={"center"} overflow={"hidden"}  >
          <Typography variant="h3" color="white" position="absolute" zIndex={1} boxShadow={'initial'} >
            Nuestro Menú
          </Typography>
          <Image shift="left" height={"60vh"} src="img/menus/enji-foodmenu.jpg"
          />
        </Box>
      </section>
      {/* Contenido icons */}
      <Container maxWidth="lg">
        <Box display="flex" mx="" my=""
        >
          <List>
            <ListItem>
              <ListItemButton variant="solid">
                <Typography color="white" >
                  Platillos
                </Typography>
                <Image height={"2rem"} src="./img/arroz-enji.svg" alt="" />
              </ListItemButton>

              <ListItemButton variant="solid">
                <Typography color="white">
                  Capeados
                </Typography>
                <Image height={"2rem"} src="./img/capeados.svg" alt="" />
              </ListItemButton>

              <ListItemButton variant="solid">
                <Typography color="white">
                  Cocteles
                </Typography>
                <Image height={"2rem"} src="./img/coctel.svg" alt="" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </div>
  );
}

export default App;
