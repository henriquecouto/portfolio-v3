import { Container, Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Header from "../../components/Header";
import PostItem from "../../components/PostItem";
import { LOCAL_URL } from "../../contants/urls";
import Post from "../../types/Post";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
}));

const PostList: React.FC<{ posts: Array<Post> }> = ({ posts }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        className={classes.grid}
      >
        {posts.map((work) => (
          <Grid item key={work.id}>
            <PostItem post={work} from="blog" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Henrique Couto | Desenvolvedor Web e Mobile</title>
      </Head>
      <Header
        variant="content"
        title="Blog"
        subtitle="Aqui estão alguns conteúdos legais feitos por mim!"
      >
        <PostList posts={posts} />
      </Header>
    </>
  );
}

Blog.getInitialProps = async () => {
  const posts = await (await fetch(`${LOCAL_URL}/api/blog`)).json();

  return { posts };
};
