import { Container, Grid, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Header from "../../components/Header";
import PostItem from "../../components/PostItem";
import { LOCAL_URL } from "../../contants/urls";
import Work from "../../types/Work";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
}));

const WorkList: React.FC<{ works: Array<Work> }> = ({ works }) => {
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
        {works.map((work) => (
          <Grid item key={work.id}>
            <PostItem post={work} from="portfolio" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default function Portfolio({ works }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Me conheça um pouco melhor através de alguns dos meus trabalhos!"
        />
        <title>Portfólio - Henrique Couto | Desenvolvedor Web e Mobile</title>
      </Head>
      <Header
        variant="content"
        title="Portfólio"
        subtitle="Aqui estão alguns dos meus trabalhos!"
      >
        <WorkList works={works} />
      </Header>
    </>
  );
}

Portfolio.getInitialProps = async () => {
  const works = await (await fetch(`${LOCAL_URL}/api/works`)).json();

  return { works };
};
