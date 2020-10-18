import { Typography } from "@material-ui/core";
import Header from "../components/Header";
import Contact from "../components/Home/Contact";
import Portfolio from "../components/Home/Portfolio";
import Skills from "../components/Home/Skills";
import Top from "../components/Home/Top";
import Section from "../components/Section";

export default function Home({ works, skills }) {
  return (
    <Header>
      <Top />
      <Portfolio works={works} />
      <Skills skills={skills} />
      <Section title="Blog" color="primary">
        <Typography>Huhu</Typography>
      </Section>
      <Contact />
    </Header>
  );
}

Home.getInitialProps = async () => {
  const works = await (
    await fetch(process.env.LOCAL_URL + "/api/works")
  ).json();

  const skills = await (
    await fetch(process.env.LOCAL_URL + "/api/skills")
  ).json();

  return { works, skills };
};
