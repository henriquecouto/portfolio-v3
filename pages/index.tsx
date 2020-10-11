import { Typography } from "@material-ui/core";
import Header from "../components/Header";
import Portfolio from "../components/Home/Portfolio";
import Top from "../components/Home/Top";
import Section from "../components/Section";

export default function Home({ works }) {
  return (
    <Header>
      <Top />
      <Portfolio works={works} />
      <Section title="Habilidades" color="secondary">
        <Typography>Hihi</Typography>
      </Section>
      <Section title="Contato" color="primary">
        <Typography>Hoho</Typography>
      </Section>
      <Section title="Blog" color="secondary">
        <Typography>Huhu</Typography>
      </Section>
    </Header>
  );
}

Home.getInitialProps = async (ctx) => {
  const works = await (
    await fetch(process.env.LOCAL_URL + "/api/works")
  ).json();
  return { works };
};
