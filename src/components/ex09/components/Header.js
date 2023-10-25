import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  border-radius: 50%;
`;
const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
`;
export const Header = () => {
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </SHeader>
  );
};
