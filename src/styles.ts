import { createGlobalStyle } from "styled-components";

const CORES = {
  branca: "#EEEEEE",
  preta: "#111",
  cinza: "#333",
  verde: "#10AC84",
};

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body{
        background-color: ${CORES.preta};
        color: ${CORES.branca}
    }
`;
