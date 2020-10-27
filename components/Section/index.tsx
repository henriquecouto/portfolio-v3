import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "../Divider";

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.hint,
  },
  secondary: {},
  sectionHeader: {
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(5),
  },
}));

type Props = {
  children?: React.ReactElement;
  color: "primary" | "secondary";
  title: string;
  id: string;
};

const Section: React.FC<Props> = ({ children, color, title, id }) => {
  const classes = useStyles();
  const dividerColor = color === "primary" ? "secondary" : "primary";

  return (
    <section className={classes[color]} id={id}>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          spacing={2}
          className={classes.sectionHeader}
        >
          <Grid item xs>
            <Divider background={dividerColor} height="high" />
          </Grid>
          <Grid item>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item xs>
            <Divider background={dividerColor} height="high" />
          </Grid>
        </Grid>
      </Container>
      <Divider background={dividerColor} height="small" />
      <Container maxWidth="md" className={classes.content}>
        <>{children}</>
      </Container>
    </section>
  );
};

export default Section;
