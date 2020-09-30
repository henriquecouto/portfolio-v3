import { Divider as MuiDivider, DividerProps } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  default: {
    backgroundColor: theme.palette.primary.main,
  },
  primary: {
    backgroundColor: theme.palette.primary.dark,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  small: {
    height: "2px",
  },
  high: {
    height: "6px",
  },
}));

type Props = {
  height?: "small" | "high";
  background?: "default" | "primary" | "secondary";
};

const Divider = (props: DividerProps & Props) => {
  const { height, background } = props;
  const classes = useStyles();
  return (
    <MuiDivider
      {...props}
      className={clsx({
        [classes.small]: height === "small",
        [classes.high]: height === "high" || height === undefined,
        [classes.default]: background === "default" || background === undefined,
        [classes.primary]: background === "primary",
        [classes.secondary]: background === "secondary",
      })}
    />
  );
};

export default Divider;
