import Image from "next/image";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Post from "../../types/Post";
import Work from "../../types/Work";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    overflow: "hidden",
    cursor: "pointer",
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

type Props = {
  post: Post | Work;
  from: "blog" | "portfolio";
  label?: string;
};

const PostItem: React.FC<Props> = ({ post, label, from }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Paper
      className={classes.paper}
      onClick={() => router.push(`/${from}/${post.title}`)}
    >
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

export default PostItem;
