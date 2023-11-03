import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 600px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;
export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  Link {
    margin-right: 30px;
  }
`;

export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
  }
`;
