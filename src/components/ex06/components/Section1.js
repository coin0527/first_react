import styled from "styled-components";
import { baseLayoutSize } from "../../../GlobalStyle";

const Section = styled.section`
  height: 70vh;
  background-color: lightgray;
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-top: 100px;
  }
`;
export const Section1 = () => {
  return (
    <Section>
      <h3> 첫번째 섹션 </h3>
    </Section>
  );
};
