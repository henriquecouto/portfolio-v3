import { Container } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";
import { LOCAL_URL } from "../../contants/urls";
import ReactMarkdown from "react-markdown/with-html";
import toc from "remark-toc";
import CodeBlock from "../../components/CodeBlock";
import Head from "next/head";
import Post from "../../types/Post";
import { GetStaticPaths, GetStaticProps } from "next";

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function PostDetails({
  post,
  file,
}: {
  post: Post;
  file: string;
}) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>
          {post.title} - Blog - Henrique Couto | Desenvolvedor Web e Mobile
          <meta name="description" content={post.desc} />
        </title>
      </Head>
      <Header title={post.title} variant="content">
        <Container maxWidth="lg">
          <ReactMarkdown
            className={classes.markdown}
            escapeHtml={false}
            source={file}
            plugins={[toc]}
            renderers={{ code: CodeBlock }}
          />
        </Container>
      </Header>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await (
    await fetch(`${LOCAL_URL}/api/blog?slug=${params.slug}`)
  ).json();

  const file = await (await fetch(LOCAL_URL + posts[0].content)).text();

  return { props: { post: posts[0], file } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Array<Post> = await (
    await fetch(`${LOCAL_URL}/api/blog`)
  ).json();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return { paths, fallback: false };
};
