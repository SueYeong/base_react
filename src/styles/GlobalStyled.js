import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  color: "gold",
  fontSize: "50px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
      background-color: #555;
    }

    a{
      text-decoration: none;
    }


`;
