import { Typography } from "@material-ui/core";
import Section from "../../Section";

type Props = {
  works: Array<any>;
};

const Portfolio: React.FC<Props> = ({ works }) => {
  return (
    <Section title="Portfólio" color="primary">
      <>
        {works.map((work) => (
          <Typography>{JSON.stringify(work)}</Typography>
        ))}
      </>
    </Section>
  );
};

export default Portfolio;
