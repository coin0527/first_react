import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;

const Box2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor="blue"></Box>
      <Box $bgColor="yellow"></Box>
      <Box2> 3번박스 </Box2>
    </div>
  );
};
