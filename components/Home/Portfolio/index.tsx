import { Button, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import theme from "../../../styles/theme";
import Work from "../../../types/Work";
import Section from "../../Section";

const useStyles = makeStyles((theme: Theme) => ({
  worksList: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(2),
    },
  },
  work: {
    height: 280,
    width: 280,
    borderRadius: theme.spacing(1),
    objectFit: "cover",
    transition: "0.5s",

    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1, 0),
      width: "100%",
      minWidth: 200,
      height: 200,
    },
  },
}));

type Props = {
  works: Array<Work>;
};

const Portfolio: React.FC<Props> = ({ works }) => {
  const classes = useStyles();
  return (
    <Section title="Portfólio" color="primary" id="portfolio">
      <>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.worksList}
        >
          {works.map((work) => (
            <Grid item key={work.id}>
              <img className={classes.work} src={work.cover} />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button variant="outlined" color="secondary">
              Ver tudo
            </Button>
          </Grid>
        </Grid>
      </>
    </Section>
  );
};

export default Portfolio;
