import { Container } from "./style";

import Dtmoney from "../../assets/dtmoney.png";
import FrontBox from "../../assets/frontBox.jpeg";

export function Challange() {
  return (
    <Container>
      <h2>Portfólio</h2>
      <section>
        <div>
          <img src={Dtmoney} />
          <h3>
            <b>dtmoney</b>
          </h3>
          <p>• Projeto criado em react</p>
        </div>

        <div>
          <a
            href="https://jean-portfolio.netlify.app/index.html"
            target="_blank"
          >
            <img src={FrontBox} />
          </a>
          <h3>
            <b>Frontbox</b>
          </h3>
          <p>• Projeto criado para treinar flexbox</p>
        </div>
      </section>
    </Container>
  );
}
