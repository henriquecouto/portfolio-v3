import { Container } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { LOCAL_URL } from "../../contants/urls";
import ReactMarkdown from "react-markdown/with-html";
import toc from "remark-toc";
import CodeBlock from "../../components/CodeBlock";
import Head from "next/head";

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function WorkDetails({ work, file }) {
  const router = useRouter();
  const { title } = router.query;

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>
          {title} - Portfólio - Henrique Couto | Desenvolvedor Web e Mobile
        </title>
      </Head>
      <Header title={title as string} variant="content">
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

WorkDetails.getInitialProps = async ({ query }) => {
  const works = await (
    await fetch(`${LOCAL_URL}/api/works?title=${query.title}`)
  ).json();

  const file = await (await fetch(LOCAL_URL + works[0].content)).text();

  return { work: works[0], file };
};
