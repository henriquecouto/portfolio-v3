import { Divider as MuiDivider, DividerProps } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    height: 6,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Divider = (props: DividerProps) => {
  const classes = useStyles();
  return <MuiDivider {...props} className={classes.divider} />;
};

export default Divider;
