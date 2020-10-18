import { Grid, Input, TextField, Typography } from "@material-ui/core";

import Section from "../../Section";

const Contact: React.FC = () => {
  return (
    <Section title="Contato" color="primary">
      <form noValidate autoComplete="off">
        <Grid container direction="column">
          <Input style={{ backgroundColor: "#e9e9ec" }} />
        </Grid>
      </form>
    </Section>
  );
};

export default Contact;
