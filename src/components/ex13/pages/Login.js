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
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // console.log(isValid);
  // 유효성 검사 후 boolean 값으로 반환함.

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
        {/* <Message message={errors?.username?.message} /> */}

        <Input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해야합니다.",
            },
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            // 문자, 숫자 같이 섞어쓰는 정규식
            message: "숫자 문자 같이 써야합니다.",
          })}
          type="password"
          placeholder="Password"
        />

        <Button $isActive={isValid}> 로그인 </Button>
      </Form>
    </Wrap>
  );
};

// Useform => 폼관련 패키지
// const {register, handleSubmit, formState:{error, isValid}}

//이때 register - input 태그 name 및 등록 역할담당
// handleSubmit - form 태그 이벤트 등록
// formState - form상태관리
// errors - 유효성 검사 후 에러를 객체로 변환
// isvalid - form상태가 유효한지 boolean값으로 전달

// useForm({mode: "onchange"}) => form모드로 유효성 검사를 어떻게 처리할지 값을 작성 가능
// <input {...register("name명", {required: ""})}
// => input 값이 필수값인지 아닌지 boolean 및 문자열로 작성가능
