import { Grid, Input, TextField, Typography } from "@material-ui/core";

import Section from "../../Section";

const Contact: React.FC = () => {
  return (
    <Section title="Contato" color="secondary">
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu nome"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu email"
              variant="filled"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={7}
              label="Sua mensagem"
              variant="filled"
              color="primary"
            />
          </Grid>
        </Grid>
      </form>
    </Section>
  );
};

export default Contact;
