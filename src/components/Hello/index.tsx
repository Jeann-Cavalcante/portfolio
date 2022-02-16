import AvatarBracoCruzado from "../../assets/bracoCruzadoFundoEscuro.jpeg";
import { Container } from "./style";

export function Hello() {
  return (
    <Container>
      <h1>
        <strong>Olá,</strong> <br /> seja bem-vindo
      </h1>
      <img src={AvatarBracoCruzado} alt="" />
    </Container>
  );
}
