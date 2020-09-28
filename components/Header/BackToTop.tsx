import React from "react";
import { Fab, useScrollTrigger, Slide } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Icon from "@iconify/react";
import arrowUp from "@iconify/icons-jam/chevron-up";

interface ScrollToTopProps {
  window?: () => Window;
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  iconButton: {
    fontSize: 28,
  },
}));

function ScrollTop(props: ScrollToTopProps) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Slide in={trigger} direction="left" mountOnEnter unmountOnExit>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Slide>
  );
}

function BackToTop() {
  const classes = useStyles();
  return (
    <ScrollTop>
      <Fab color="primary" size="medium" aria-label="scroll back to top">
        <Icon icon={arrowUp} className={classes.iconButton} />
      </Fab>
    </ScrollTop>
  );
}

export default BackToTop;
