import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  div {
    width: 350px;
    height: 350px;
    color: #fff;
    border: 1px solid var(--text);
    border-radius: 15px;
    padding: 8px;
    margin-top: 3rem;

    img {
      width: 100%;
      border-radius: 15px;
    }
  }

  h3 {
    color: var(--text);
    text-align: center;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
  }
`;
