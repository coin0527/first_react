import styled from "styled-components";
const SCover = styled.div`
  margin: 50px auto;
  max-width: 350px;
  width: 100%;
`;
const Bg = styled.div`
  height: 320px;
  background-color: lightgray;
  border-radius: 20px;
`;
const TitleWrap = styled.div`
  text-align: center;
  margin-top: 30px;
  h3 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #808080;
    margin-top: 10px;
  }
`;
export const Cover = () => {
  return (
    <div>
      <SCover>
        <Bg />
        <TitleWrap>
          <h3>Blue bird</h3>
          <p>Pick Dreams</p>
        </TitleWrap>
      </SCover>
    </div>
  );
};
//.
