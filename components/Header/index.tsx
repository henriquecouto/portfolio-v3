import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { transparentize } from "polished";
import Icon from "@iconify/react";
import menu from "@iconify/icons-jam/menu";

import ElevationScroll from "./ElevationScroll";
import Button from "../Button";

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
  iconButton: {
    fontSize: 28,
  },
}));

const Header: React.FC = (props) => {
  const classes = useStyles();
  return (
    <>
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
                  <Button color="primary" variant="contained">
                    <Icon icon={menu} className={classes.iconButton} />
                  </Button>
                </Hidden>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container>{props.children}</Container>
    </>
  );
};

export default Header;
