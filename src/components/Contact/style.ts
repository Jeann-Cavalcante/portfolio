import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  form {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    label {
      text-align: start;
      color: #fff;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
    }

    input {
      width: 750px;
      height: 2.5rem;
      border: 1px solid var(--text);
      border-radius: 10px;
      outline: 0;
      box-shadow: 0 0 0 0;
      margin-bottom: 1rem;

      &:hover {
        outline: 0;
        box-shadow: 0 0 0 0;
        border: 1.5px solid var(--text);
      }

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
        border: 2px solid var(--text);
      }
    }

    textarea {
      outline: 0;
      box-shadow: 0 0 0 0;
      width: 750px;
      height: 10rem;
      border: 1px solid var(--text);
    }
  }
`;
