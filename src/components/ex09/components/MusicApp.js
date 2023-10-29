import styled from "styled-components";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { BtnWrap } from "./BtnWrap";
import { PlayTime } from "./PlayTime";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
`;
const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #1d1d1d;
  padding: 50px 20px;
  position: relative;
`;
// header end
// .
export const MusicApp = () => {
  return (
    <Wrap>
      <Container>
        <Header />
        <Cover />
        <PlayTime />
        <BtnWrap />
        <UserCon />
      </Container>
    </Wrap>
  );
};
