import React from "react";
import { AppBar, Box, Container, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { transparentize } from "polished";

import ElevationScroll from "./ElevationScroll";
import BackToTop from "./BackToTop";
import VariantHome from "./VariantHome";
import VariantContent from "./VariantContent";

// const VariantContent;

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

type Props = {
  variant?: "content" | "home";
  title?: string;
  subtitle?: string;
};

const Header: React.FC<Props> = ({
  variant = "home",
  title,
  subtitle,
  ...props
}) => {
  const classes = useStyles();

  const variants = {
    home: <VariantHome appBarHeight={appBarHeight} />,
    content: <VariantContent title={title} subtitle={subtitle} />,
  };

  return (
    <>
      <div id="back-to-top-anchor" />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar className={classes.toolbar}>
            <Container maxWidth="xl">{variants[variant]}</Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box>{props.children}</Box>
      <BackToTop />
    </>
  );
};

export default Header;
