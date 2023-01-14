import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";
import Image from "mui-image";
import zIndex from "@mui/material/styles/zIndex";
import Header from "../components/Header";

function App() {
  return (
    <div className="">
      <section className="seccion-inicio">
        <Container>
          <Header />
          {/* Contenido hero */}
          <Box display="block">
            <Image src="img/menus/enji-foodmenu.jpg" />
          </Box>
        </Container>
      </section>
      {/* Contenido icons */}
      <Container maxWidth="lg">
        <Box display="" mx="" my="" sx="">
          <ul>
            <li>
              <Link>
                <img src="./img/arroz-enji.svg" alt="" />
                <Typography variant="body2" color="initial">
                  Platillos
                </Typography>
              </Link>
              <Link>
                <img src="./img/arroz-enji.svg" alt="" />
                <Typography variant="body2" color="initial">
                  Platillos
                </Typography>
              </Link>
              <Link>
                <img src="./img/arroz-enji.svg" alt="" />
                <Typography variant="body2" color="initial">
                  Platillos
                </Typography>
              </Link>
              <Link>
                <img src="./img/arroz-enji.svg" alt="" />
                <Typography variant="body2" color="initial">
                  Platillos
                </Typography>
              </Link>
            </li>
          </ul>
        </Box>
      </Container>
    </div>
  );
}

export default App;
