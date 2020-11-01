import { useRouter } from "next/router";
import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import Icon from "@iconify/react";
import back from "@iconify/icons-jam/arrow-square-left";
import getPreviousPath from "../../util/getPreviousPath";

const BackButton: React.FC = () => {
  const router = useRouter();
  const backTo = getPreviousPath(router.pathname);

  return (
    <Tooltip title="Voltar">
      <IconButton color="primary" onClick={() => router.push(backTo)}>
        <Icon icon={back} width={28} height={28} />
      </IconButton>
    </Tooltip>
  );
};

const VariantContent: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <BackButton />
      </Grid>
      <Grid item>
        <Typography variant="h4" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="textPrimary">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VariantContent;
