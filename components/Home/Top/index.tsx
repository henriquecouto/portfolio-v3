import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "../../Divider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    marginTop: -132,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 132,
    },
  },
  puzzle: {
    margin: theme.spacing(2),
  },
  textAlign: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Top: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item>
          <img src="/puzzle.svg" className={classes.puzzle} />
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.textAlign}>
            Henrique Couto
          </Typography>
          <Typography variant="subtitle1" className={classes.textAlign}>
            <Divider />
            Desenvolvedor Web e Mobile
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Top;
