import { useRouter } from "next/router";
import Link from "next/link";
import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import Icon from "@iconify/react";
import back from "@iconify/icons-jam/arrow-square-left";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <Tooltip title="Voltar">
      <IconButton color="primary" onClick={router.back}>
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
