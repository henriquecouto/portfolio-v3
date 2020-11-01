import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
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
          <Image
            src={post.cover}
            className={classes.img}
            width={280}
            height={280}
          />
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

const useBlogStyles = makeStyles((theme: Theme) => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

const Blog: React.FC<Props> = ({ lastPost }) => {
  const classes = useBlogStyles();

  return (
    <Section title="Blog" color="primary" id="blog">
      <Grid
        container
        direction="column"
        alignItems="flex-end"
        spacing={2}
        className={classes.grid}
      >
        <Grid item>
          <PostItem label="Último post" post={lastPost} />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Ver tudo
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Blog;
