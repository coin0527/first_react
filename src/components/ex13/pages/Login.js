import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Message } from "../components/Message";

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
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors?.username?.message);
  // obtional chaining 연산자

  const loginHandler = (data) => {
    console.log(data); // 객체의 형태로 반환함
    //이벤트 함수 매개변수의 첫번째 자리는 유저가 입력한 내용을 객체형태로 반환함
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
        {/* <span>{errors?.username?.message}</span> */}
        <Message message={errors?.username?.message} />

        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />

        <Button> 로그인 </Button>
      </Form>
    </Wrap>
  );
};
