import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "../Button";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  drawerButton: {
    color: theme.palette.text.secondary,
  },
}));

type Props = {
  appBarHeight: number;
};

const VariantHome: React.FC<Props> = ({ appBarHeight }) => {
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
    <Grid container alignItems="center" justify="space-between">
      <img src="/logo.svg" />
      <Hidden smDown>
        <div>
          <Button color="primary" onClick={handleClick("#back-to-top-anchor")}>
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
  );
};

export default VariantHome;
