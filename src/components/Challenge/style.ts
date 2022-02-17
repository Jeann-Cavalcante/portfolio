import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
  }

  div {
    width: 350px;
    height: 350px;
    color: #fff;
    border: 2px solid var(--text);
    border-radius: 15px;
    margin-top: 3rem;
    transition: 0.5s;

    &:hover {
      width: 351px;
      height: 353px;
      border: 4px solid var(--text);
    }

    img {
      width: 100%;
      height: 190px;
      border-radius: 15px;
      cursor: pointer;
    }
  }

  h3 {
    color: var(--text);
    text-align: center;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    padding-left: 8px;
  }
`;
