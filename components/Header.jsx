import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";


const Header = () => {
  return (
      <header>
        {/* Logotipo y complementos */}
        <Grid
          container
          padding={"1rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid item sm={"30%"}>
            <Typography
              fontSize="small"
              variant="body2"
              component={"p"}
              color="whitesmoke"
            >
              Servicio en comedor de 12:00 a 11:00 pm.
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              color="whitesmoke"
              fontSize={"small"}
            >
              Servicio TO GO de 11:00am a 11:00 pm.
            </Typography>
          </Grid>
          <Grid item md={"3"}>
            <Box display={"flex"} justifyContent={"center"}>
              <img src="img/logo.png" alt="" />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <img src="img/icons/whatsapp.png" alt="" />
              <img src="img/icons/instagram.png" alt="" />
              <img src="img/icons/facebook.png" alt="" />
            </Box>
          </Grid>
        </Grid>

        <nav>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{ backgroundColor: "#111111" }}
          >
            <Grid
              gap={2}
              marginY="1rem"
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/*  Enlace */}
              <Grid item xs={"10%"}>
                <Link underline="none">
                  <Typography
                    textAlign="center"
                    padding={0}
                    fontSize={"small"}
                    variant="body2"
                    component="p"
                    color="white"
                  >
                    Inicio
                  </Typography>
                </Link>
              </Grid>

              {/*  Enlace */}
              <Grid item xs={"10%"}>
                <Link underline="none">
                  <Typography
                    textAlign="center"
                    fontSize={"small"}
                    variant="body2"
                    component="p"
                    color="white"
                  >
                    Menu
                  </Typography>
                </Link>
              </Grid>

              {/*  Enlace */}
              <Grid item xs={"10%"}>
                <Link underline="none">
                  <Typography
                    textAlign="center"
                    fontSize={"small"}
                    variant="body2"
                    component="p"
                    color="white"
                  >
                    Promociones
                  </Typography>
                </Link>
              </Grid>

              {/*  Enlace */}
              <Grid item xs={"10%"}>
                <Link underline="none">
                  <Typography
                    textAlign="center"
                    fontSize={"small"}
                    variant="body2"
                    component="p"
                    color="white"
                  >
                    Ubicaciones
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={"50%"}>
                <Button variant="outlined" color="error">
                  Ordena ahora!
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </nav>
      </header>
  );
};

export default Header;
