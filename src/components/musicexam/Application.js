import styled from "styled-components";

const Wrap = styled.div``;
const Container = styled.div``;
const Header = styled.header``;
const Btn1 = styled.div``;
const Btn2 = styled.div``;
const Cover = styled.div``;
const Album = styled.div``;
const Title = styled.div``;
const Singer = styled.div``;
const Playtime = styled.div``;
const Prgress = styled.div``;
const Bar = styled.div``;
const TimeWrap = styled.div``;
const ButtonWrap = styled.div``;
const UserCon = styled.div``;
const Avatar = styled.div``;
const Username = styled.div``;
const Nextbtn = styled.div``;

export const Application = () => {
  return (
    <Wrap>
      <Container>
        <Header>
          <Btn1></Btn1>
          <Btn2></Btn2>
        </Header>
        <Cover>
          <Album></Album>
          <Title></Title>
          <Singer></Singer>
        </Cover>
        <Playtime>
          <Prgress>
            <Bar></Bar>
          </Prgress>
          <TimeWrap>
            <p>00:00</p>
            <p>03:40</p>
          </TimeWrap>
        </Playtime>
        <ButtonWrap></ButtonWrap>
        <UserCon>
          <Avatar></Avatar>
          <Username></Username>
          <Nextbtn></Nextbtn>
        </UserCon>
      </Container>
    </Wrap>
  );
};
