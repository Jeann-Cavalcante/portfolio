import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80vh;
  color: #fff;

  h1 {
    padding: 1rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      margin-top: 1.5rem;
    }
  }

  strong {
    color: var(--text);
  }

  img {
    height: 60vh;
  }
`;
