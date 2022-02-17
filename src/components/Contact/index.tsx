import { Container } from "./style";

export function Contact() {
  return (
    <Container>
      <form action="">
        <h2>Contato</h2>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" />

          <label htmlFor="">Email</label>
          <input type="email" />

          <label htmlFor="">Assunto</label>
          <input type="text" />

          <label htmlFor="">Menssagem</label>
          <textarea> </textarea>
        </div>
      </form>
    </Container>
  );
}
