import {
  Button,
  Fab,
  Grid,
  TextField,
  Theme,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@iconify/react";
import instagram from "@iconify/icons-jam/instagram";
import github from "@iconify/icons-jam/github-square";
import linkedin from "@iconify/icons-jam/linkedin-square";

import Section from "../../Section";

const useStyles = makeStyles((theme: Theme) => ({
  iconSocial: {
    fontSize: 27,
  },
  buttonSocial: {
    margin: theme.spacing(0, 2),
    marginLeft: 0,
  },
}));

const SocialButton: React.FC<{ network: string; icon: object }> = ({
  network,
  icon,
}) => {
  const classes = useStyles();

  return (
    <Tooltip title={network}>
      <Fab color="primary" size="small" className={classes.buttonSocial}>
        <Icon icon={icon} className={classes.iconSocial} />
      </Fab>
    </Tooltip>
  );
};

const Contact: React.FC = () => {
  return (
    <Section title="Contato" color="secondary">
      <form noValidate autoComplete="off">
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu nome"
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu email"
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Sua mensagem"
              variant="outlined"
              color="primary"
              inputProps={{ maxLength: 500 }}
            />
          </Grid>
          <Grid item>
            <SocialButton network="Github" icon={github} />
            <SocialButton network="Linkedin" icon={linkedin} />
            <SocialButton network="Instagram" icon={instagram} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Section>
  );
};

export default Contact;
