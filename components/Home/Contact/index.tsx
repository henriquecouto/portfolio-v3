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
import { FormEvent, useState } from "react";
import { useSnackbar } from "notistack";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const onChangeName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNameError(value.length < 3);
    setName(value);
  };

  const onChangeEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const re: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(!re.test(value));
    setEmail(value);
  };

  const onChangeMessage = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageError(value.split(" ").length < 3);
    setMessage(value);
  };

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();

    let pass = false;

    if (!name || nameError) {
      enqueueSnackbar("Poderia informar o seu nome? 😕", { variant: "error" });
      setNameError(true);
      pass = false;
    }

    if (!email || emailError) {
      enqueueSnackbar("Poderia informar o seu email? 😕", { variant: "error" });
      setEmailError(true);
      pass = false;
    }

    if (!message || messageError) {
      enqueueSnackbar("Ops! O que acha de escrever uma mensagem? 😕", {
        variant: "error",
      });
      setMessageError(true);
      pass = false;
    }

    if (!pass) {
      return false;
    }

    const res = await (
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ a: "hehe" }),
      })
    ).json();
    console.log(res);
  };

  return (
    <Section title="Contato" color="secondary">
      <form noValidate autoComplete="off" onSubmit={sendMessage}>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu nome"
              variant="outlined"
              color="primary"
              value={name}
              onChange={onChangeName}
              error={nameError}
              type="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Seu email"
              variant="outlined"
              color="primary"
              value={email}
              onChange={onChangeEmail}
              error={emailError}
              type="email"
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
              value={message}
              onChange={onChangeMessage}
              error={messageError}
              type="text"
              inputProps={{ maxLength: 500 }}
            />
          </Grid>
          <Grid item>
            <SocialButton network="Github" icon={github} />
            <SocialButton network="Linkedin" icon={linkedin} />
            <SocialButton network="Instagram" icon={instagram} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Section>
  );
};

export default Contact;
