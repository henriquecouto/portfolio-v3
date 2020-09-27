import { Button as MuiButton, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.7, 3),
  },
}));

const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles();
  return <MuiButton className={classes.root} {...props} />;
};

export default Button;
