import { Typography } from "@material-ui/core";
import Skill from "../../../types/Skill";
import Section from "../../Section";

type Props = {
  skills: Array<Skill>;
};

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <Section title="Habilidades" color="secondary">
      <>{JSON.stringify(skills)}</>
    </Section>
  );
};

export default Skills;
