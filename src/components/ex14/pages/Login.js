import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: salmon;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;
const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  Link {
    margin-right: 30px;
  }
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  console.log(errors?.username?.message);

  const loginHandler = (data) => {
    console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="ID"
        />
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해야합니다.",
            },
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "숫자 문자 같이 써야합니다.",
          })}
          type="password"
          placeholder="Password"
        />
        <Button $isActive={isValid}> 로그인 </Button>

        <BottomWrap>
          <Link to={"/signup"}>SignUp</Link>
          <Link to={"/home"}>HOME</Link>
        </BottomWrap>
      </Form>
    </Wrap>
  );
};
