import React from "react";
import {
  AppBar,
  Box,
  Container,
  Fab,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { transparentize } from "polished";

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

  const handleClick = (selector: string) => (
    event: React.MouseEvent<
      HTMLDivElement & HTMLButtonElement & HTMLButtonElement
    >
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(selector);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
                    <Button
                      color="primary"
                      onClick={handleClick("#back-to-top-anchor")}
                    >
                      Início
                    </Button>
                    <Button color="primary" onClick={handleClick("#portfolio")}>
                      Portfólio
                    </Button>
                    <Button color="primary" onClick={handleClick("#skills")}>
                      Habilidades
                    </Button>
                    <Button color="primary" onClick={handleClick("#contact")}>
                      Contato
                    </Button>
                  </div>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClick("#blog")}
                  >
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
                      onClick={handleClick("#back-to-top-anchor")}
                    >
                      Início
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                      onClick={handleClick("#portfolio")}
                    >
                      Portfólio
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                      onClick={handleClick("#skills")}
                    >
                      Habilidades
                    </Button>
                    <Button
                      fullWidth
                      className={classes.drawerButton}
                      color="secondary"
                      variant="contained"
                      onClick={handleClick("#contact")}
                    >
                      Contato
                    </Button>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={handleClick("#blog")}
                    >
                      Blog
                    </Button>
                  </Drawer>
                </Hidden>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box>{props.children}</Box>
      <BackToTop />
    </>
  );
};

export default Header;
