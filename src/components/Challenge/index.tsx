import { Container } from "./style";

import Dtmoney from "../../assets/dtmoney.png";

export function Challange() {
  return (
    <>
      <h2>Portfólio</h2>
      <Container>
        <div>
          <img src={Dtmoney} />
          <h3>
            <b>dtmoney</b>
          </h3>
          <p>• Projeto criado em react</p>
        </div>
      </Container>
    </>
  );
}
