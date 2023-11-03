import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Form,
  Title,
  Input,
  BottomWrap,
  Separ,
} from "../components/loginstyled";

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
        <ErrorMessage text={errors?.username?.message} />
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
        <ErrorMessage text={errors?.password?.message} />

        <ButtonUi active={isValid} text={"로그인"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottomWrap>
          <Link to={"/signup"}>SignUp</Link>
          <Link to={"/home"}>HOME</Link>
        </BottomWrap>
      </Form>
    </Wrap>
  );
};
