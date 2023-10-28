import styled from "styled-components";

const ErrorWrap = styled.div`
  padding: 300px 200px;
`;
const H3 = styled.div`
  color: #333;
  font-style: italic;
  font-size: 30px;
  font-weight: 700;
`;

export const Errorpages = () => {
  return (
    <ErrorWrap>
      <H3> 요청하신 페이지는 찾을 수 없습니다. </H3>
    </ErrorWrap>
  );
};
