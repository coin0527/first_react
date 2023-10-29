import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SUserCon = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: #1d1d1d;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: 50%;
  background-color: lightgray;
  margin-right: 10px;
`;
const NextBtn = styled.div``;
export const UserCon = () => {
  return (
    <SUserCon>
      <User>
        <Avatar />
        <h3>Sirocoin</h3>
      </User>

      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SUserCon>
  );
};
//.
