import { Button, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import theme from "../../../styles/theme";
import Work from "../../../types/Work";
import Section from "../../Section";

const useStyles = makeStyles((theme: Theme) => ({
  worksList: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  work: {
    height: 280,
    width: 280,
    borderRadius: theme.spacing(1),
    objectFit: "cover",
    transition: "0.5s",
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      minWidth: 200,
      height: 200,
    },
  },
  showMore: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));

type Props = {
  works: Array<Work>;
};

const Portfolio: React.FC<Props> = ({ works }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Section title="Portfólio" color="primary" id="portfolio">
      <>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.worksList}
          spacing={2}
        >
          {works.map((work) => (
            <Grid item key={work.id}>
              <Image
                onClick={() => router.push(`/portfolio/${work.slug}`)}
                className={classes.work}
                src={work.cover}
                width={280}
                height={280}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container justify="flex-end" className={classes.showMore}>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => router.push("/portfolio")}
            >
              Ver tudo
            </Button>
          </Grid>
        </Grid>
      </>
    </Section>
  );
};

export default Portfolio;
