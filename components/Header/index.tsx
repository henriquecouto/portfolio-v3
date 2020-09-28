import React from "react";
import {
  AppBar,
  Container,
  Fab,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { transparentize } from "polished";
import Icon from "@iconify/react";
import arrowUp from "@iconify/icons-jam/arrow-up";

import ElevationScroll from "./ElevationScroll";
import Button from "../Button";
import Drawer from "./Drawer";
import BackToTop from "./BackToTop";

const appBarHeight = 100;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: transparentize(0.6, theme.palette.secondary.main),
    minHeight: appBarHeight,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    margin: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`,
    borderRadius: theme.spacing(1),
  },
  toolbar: {
    minHeight: appBarHeight,
    padding: 0,
  },
  drawerButton: {
    color: theme.palette.text.secondary,
  },
}));

const Header: React.FC = (props) => {
  const classes = useStyles();
  return (
    <>
      <div id="back-to-top-anchor" />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar className={classes.toolbar}>
            <Container maxWidth="xl">
              <Grid container alignItems="center" justify="space-between">
                <img src="/logo.svg" />
                <Hidden smDown>
                  <div>
                    <Button color="primary">Início</Button>
                    <Button color="primary">Portfólio</Button>
                    <Button color="primary">Habilidades</Button>
                    <Button color="primary">Contato</Button>
                  </div>
                  <Button color="primary" variant="contained">
                    Blog
                  </Button>
                </Hidden>
                <Hidden mdUp>
                  <Drawer appBarHeight={appBarHeight}>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                    >
                      Início
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                    >
                      Portfólio
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                    >
                      Habilidades
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                    >
                      Contato
                    </Button>
                    <Button fullWidth color="primary" variant="contained">
                      Blog
                    </Button>
                  </Drawer>
                </Hidden>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container>{props.children}</Container>
      <BackToTop />
    </>
  );
};

export default Header;
