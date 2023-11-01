import styled from "styled-components";

const Alam = styled.span`
  color: crimson;
  font-weight: 500;
`;

export const Message = (Alam) => {
  return <Alam>{Alam}</Alam>;
};
