import { Typography } from "@material-ui/core";
import Header from "../components/Header";

export default function Home() {
  return (
    <Header>
      <div
        style={{
          height: "150vh",
          display: "flex",
          // justifyContent: "space-between",
          flexDirection: "column",
          border: "#212121 solid",
        }}
      >
        <Typography variant="h1">Henrique Couto - H1</Typography>
        <Typography variant="h2">Portfólio - H2</Typography>
        <Typography variant="h3">React Native - H3</Typography>
        <Typography variant="h4">Alguma coisa - H4</Typography>
        <Typography variant="body1">Alguma coisa - Body 1</Typography>

        <p>
          dsakdasdask dkashdkjas hdjksah djksah dash dkjh dsakdasdask dkashdkjas
          hdjksah djksah dash dkjh dsakdasdask dkashdkjas hdjksah djksah dash
          dkjh dsakdasdask dkashdkjas hdjksah djksah dash dkjh final
        </p>
      </div>
    </Header>
  );
}
