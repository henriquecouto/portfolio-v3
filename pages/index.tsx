import Header from "../components/Header";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import Portfolio from "../components/Home/Portfolio";
import Skills from "../components/Home/Skills";
import Top from "../components/Home/Top";

export default function Home({ works, skills, lastPost }) {
  return (
    <Header>
      <Top />
      <Portfolio works={works} />
      <Skills skills={skills} />
      <Blog lastPost={lastPost} />
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

  const lastPost = await (
    await fetch(process.env.LOCAL_URL + "/api/blog")
  ).json();

  return { works, skills, lastPost };
};
