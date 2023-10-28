import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;
const Logo = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
    color: black;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}> LOGO </Link>
      </Logo>
      <Nav>
        <li>
          <Link to={"/Subs01"}> 메뉴 1</Link>
        </li>
        <li>
          <Link to={"/Subs02"}> 메뉴 2</Link>
        </li>
      </Nav>
    </Sheader>
  );
};
