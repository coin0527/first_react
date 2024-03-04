import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;

export const Event02Ex = () => {
  const [bgColor, setBgColor] = useState("salmon");
  const [num, setNum] = useState(0);

  const onClickBox = () => {
    if (num === 0) {
      setBgColor("teal");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("salmon");
      setNum(num - 1);
    }

    console.log(num);
  };
  return (
    <div>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};
