import styled from "styled-components";
// 부모
const Wrap = styled.div`
  width: 100%;
  height: 300px;
  // 넓이 100%에 높이 300px이라는 부모안에서 자식이 움직이게됨
`;

// 자식
const Box = styled.div`
  width: 100px;
`;
const Box2 = styled.div`
  width: 200px;
`;
const Box3 = styled.div`
  width: 300px;
`;

export const Example22 = () => {
  return (
    <Wrap>
      <Box />
      <Box2 />
      <Box3 />
    </Wrap>
  );
};
