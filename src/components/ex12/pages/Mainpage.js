import styled from "styled-components";
import { Link } from "react-router-dom";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgray;
`;
const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 45%;
  height: 600px;
  background-color: lightgray;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    /* a는 원래 인라인요소인데, 안에 넣어주기위해서 블럭요소로 변경해주어야한다. */
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const Mainpage = () => {
  return (
    <div>
      <Banner>
        <Link to={"/"}></Link>
      </Banner>
      <Section>
        <Con>
          <Link to={"/sub01"}></Link>
        </Con>
        <Con>
          <Link to={"/sub02"}></Link>
        </Con>
      </Section>
    </div>
  );
};
