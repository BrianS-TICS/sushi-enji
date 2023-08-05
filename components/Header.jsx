import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";

import Stack from '@mui/material/Stack';

import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  return (
    <header>
      {/* Logotipo y complementos */}
      <Grid
        container
        padding={"1rem"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        textAlign='center'
      >
        <Grid item xs={12} md={4} >
          <Typography
            fontSize="small"
            variant="body2"
            component={"p"}
            color="whitesmoke"
          >Servicio en comedor de 12:00 a 11:00 pm.
          </Typography>
          <Typography
            variant="body2"
            component={"p"}
            color="whitesmoke"
            fontSize={"small"}
          >Servicio TO GO de 11:00am a 11:00 pm.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box height={"5rem"} display={"flex"} justifyContent={"center"}>
            <img src="img/logo.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}

            height={"2rem"}
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
          <Box
            display={"flex"}
            gap={2}
            marginY="1rem"
            justifyContent="center"
            alignItems="center"
            flexDirection={'row'}
          >
            {/*  Enlace */}
            <Box>
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
            </Box>

            {/*  Enlace */}
            <Box >
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
            </Box>

            {/*  Enlace */}
            <Box >
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
            </Box>

            {/*  Enlace */}
            <Box >
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
            </Box>

            <Box >
              <Button variant="outlined" color="error">
                Ordena ahora!
              </Button>
            </Box>
          </Box>
        </Paper>
      </nav>
    </header >
  );
};

export default Header;
