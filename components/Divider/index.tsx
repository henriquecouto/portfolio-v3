import { Divider as MuiDivider, DividerProps } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
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
  background?: "primary" | "secondary";
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
        [classes.primary]: background === "primary" || background === undefined,
        [classes.secondary]: background === "secondary",
      })}
    />
  );
};

export default Divider;
