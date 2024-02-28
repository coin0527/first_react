import {
  faBackward,
  faForward,
  faForwardStep,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  font-size: 18px;
  align-items: center;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: lightcyan;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    transform: translate();
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SBtnWrap>
  );
};
//.
