import { Container } from "./style";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Xau from "../../assets/xau.png";

export function Footer() {
  return (
    <>
      <hr />
      <Container>
        <img src={Xau} alt="" />
        <a href="">
          <AiFillGithub />
        </a>
        <a href="">
          <AiFillLinkedin />
        </a>
        <p>
          Feito com muito <strong>♥</strong>
        </p>
      </Container>
    </>
  );
}
