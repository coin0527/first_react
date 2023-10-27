import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const baseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *
    {
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    a
    {
      text-decoration: none;
      color: #1d1d1d;
    }
`;

// 전체영역에서 사용할수있는 스타일 처리법
