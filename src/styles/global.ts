import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  :root {
    --prymary: #070C08;
    --text: #02E7D9;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body { 
    font-family: 'Poppins', sans-serif;
    background: var(--prymary);
  }

  a { 
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      filter: brightness(0.7)
    }
  }

  h2 {
    color: var(--text);
    font-size: 800;
    text-align: center;
  }

`;
