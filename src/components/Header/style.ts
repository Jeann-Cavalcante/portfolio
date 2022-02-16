import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;

  a {
    color: var(--text);
  }

  img {
    padding-left: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
