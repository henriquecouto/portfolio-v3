import { Button, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Post from "../../../types/Post";
import PostItem from "../../PostItem";
import Section from "../../Section";

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
  const router = useRouter();

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
          <PostItem label="Último post" post={lastPost} from="blog" />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/blog")}
          >
            Ver tudo
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Blog;
