import { Typography } from "@material-ui/core";
import Header from "../../components/Header";

export default function Portfolio() {
  return (
    <>
      <Header
        variant="content"
        title="Portfólio"
        subtitle="Aqui estão alguns dos meus trabalhos!"
      >
        <Typography>Hello Portfolio with Header</Typography>
      </Header>
    </>
  );
}
