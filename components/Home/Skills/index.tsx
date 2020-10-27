import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Skill from "../../../types/Skill";
import Section from "../../Section";

type Props = {
  skills: Array<Skill>;
};

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: 280,
    },
  },
  cover: {
    width: 280,
    height: 280,
    padding: 30,
    backgroundColor: theme.palette.primary.dark,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  details: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const SkillItem: React.FC<{ skill: Skill; index?: number }> = ({
  skill,
  index,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction={index ? (index % 2 == 0 ? "row" : "row-reverse") : "row"}
      >
        <Grid item className={classes.cover}>
          <img src={skill.cover} className={classes.img} />
        </Grid>
        <Grid item xs className={classes.details}>
          <Typography variant="h3">{skill.title}</Typography>
          <Typography variant="body1">{skill.desc}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <Section title="Habilidades" color="secondary" id="skills">
      <Grid container spacing={2} direction="column" alignItems="center">
        {skills.map((skill, index) => {
          return (
            <Grid item key={skill.id}>
              <SkillItem skill={skill} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Skills;
