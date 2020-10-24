import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Post from "../../../types/Post";
import Section from "../../Section";

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
    backgroundColor: theme.palette.primary.dark,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  details: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
  },
  label: {
    position: "absolute",
    top: 10,
    right: 15,
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      top: 5,
      right: 10,
    },
  },
}));

const PostItem: React.FC<{ post: Post; label: string }> = ({ post, label }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item className={classes.cover}>
          <img src={post.cover} className={classes.img} />
        </Grid>
        <Grid item xs className={classes.details}>
          <Typography className={classes.label} variant="subtitle2">
            {label}
          </Typography>
          <Typography variant="h3">{post.title}</Typography>
          <Typography variant="body1">{post.desc}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

type Props = {
  lastPost: Post;
};

const Blog: React.FC<Props> = ({ lastPost }) => {
  return (
    <Section title="Blog" color="primary">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <PostItem label="Último post" post={lastPost} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Blog;
