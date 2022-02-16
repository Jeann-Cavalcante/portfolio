import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <img
        src="https://media0.giphy.com/media/l0HU7JI4zIb34QM5a/giphy.gif?cid=ecf05e47nshrjrm1cdw0z9yb43hruemews1y9uo1804w6psk&rid=giphy.gif&ct=s"
        alt="logo"
        width="60px"
        height="50px"
      />
      <nav>
        <a href="">Inicio</a>
        <a href="">Desafios</a>
        <a href="">Portifolios</a>
        <a href="">Contatos</a>
      </nav>
    </Container>
  );
}
