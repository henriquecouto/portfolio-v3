import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Drawer as MuiDrawer,
  Grid,
  Typography,
} from "@material-ui/core";
import Button from "../Button";
import Icon from "@iconify/react";
import menu from "@iconify/icons-jam/menu";
import close from "@iconify/icons-jam/close";
import { transparentize } from "polished";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100vw",
    // padding: theme.spacing(3),
  },
  listItem: {
    width: "100%",
  },
  listTop: {
    margin: theme.spacing(2, 0),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  drawerPaper: {
    backgroundColor: transparentize(0.6, theme.palette.secondary.main),
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },
  drawerBackdrop: {
    backgroundColor: "#0000",
  },
  iconButton: {
    fontSize: 28,
  },
}));

interface Props {
  appBarHeight: number;
}

const Drawer: React.FC<Props> = ({ children, appBarHeight }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <Button color="primary" variant="contained" onClick={toggleDrawer(true)}>
        <Icon icon={menu} className={classes.iconButton} />
      </Button>
      <MuiDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={500}
        PaperProps={{ className: classes.drawerPaper }}
        BackdropProps={{ className: classes.drawerBackdrop }}
      >
        <Container maxWidth="xl" className={classes.list}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            style={{ height: appBarHeight }}
            className={classes.listTop}
          >
            <Grid item>
              <img src="/logo.svg" />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={toggleDrawer(false)}
              >
                <Icon icon={close} className={classes.iconButton} />
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" spacing={2}>
            {React.Children.map(children, (child) => (
              <Grid item className={classes.listItem}>
                {child}
              </Grid>
            ))}
          </Grid>
        </Container>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
