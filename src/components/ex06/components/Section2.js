import styled from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyle";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  transition: 0.5s;
  &:hover {
    /* &는 자신을 한번 더 선택할때 사용함. */
    opacity: 0.5;
  }
`;

export const Section2 = () => {
  return (
    <Section>
      <h3> 두번째 섹션</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTVfMTk3%2FMDAxNjc4ODQxMzY2MjU1.NNQQs3rQOsQ8_acnPNanr7JtMET4dxQDO6tbXrmFmJog.r1nS7ry8NzAiQT7TvJYCsqsq3mLj3eck0xrvLMHRracg.JPEG.kwk0223%2F5c20717ea5f3b5de13caf83434076aae.jpg&type=ofullfill340_600_png"
          }
        ></Con>
        <Con
          $bgImg={
            "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F201807%2FFPL%2F1000687506.jpg&type=a340"
          }
        ></Con>
        <Con
          $bgImg={
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjZfNjkg%2FMDAxNjY5NDQ0ODA4OTAw.kkmokpXLlLvN7GmjRiAk9qW05SPeyjLEVo6xT0vPYp8g.f7rDxp07V1ss5sCyzVbGWM7aQUGZIukrFxaoIrzyOd4g.JPEG.sinvi640%2F1669444635164.jpg&type=a340"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};
