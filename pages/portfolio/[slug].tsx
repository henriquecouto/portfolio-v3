import { Container } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";
import { STATIC_URL } from "../../contants/urls";
import ReactMarkdown from "react-markdown/with-html";
import toc from "remark-toc";
import CodeBlock from "../../components/CodeBlock";
import Head from "next/head";
import Work from "../../types/Work";
import { GetStaticPaths, GetStaticProps } from "next";

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function WorkDetails({
  work,
  file,
}: {
  work: Work;
  file: string;
}) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>
          {work.title} - Portfólio - Henrique Couto | Desenvolvedor Web e Mobile
        </title>
        <meta name="description" content={work.desc} />
      </Head>
      <Header title={work.title} variant="content">
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
  const works = await (
    await fetch(`${STATIC_URL}/api/works?slug=${params.slug}`)
  ).json();

  const file = await (await fetch(STATIC_URL + works[0].content)).text();

  return { props: { work: works[0], file } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works: Array<Work> = await (
    await fetch(`${STATIC_URL}/api/works`)
  ).json();

  const paths = works.map((work) => {
    return {
      params: {
        slug: work.slug,
      },
    };
  });

  return { paths, fallback: false };
};
