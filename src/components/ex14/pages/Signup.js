import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";
import {
  Wrap,
  Form,
  Title,
  Input,
  BottomWrap,
  Separ,
} from "../components/loginstyled";
import { ErrorMessage } from "../components/ErrorMessage";

export const Signup = () => {
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
        <Title>Sign up</Title>
        {/* 아이디 */}
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="ID"
        />
        <ErrorMessage text={errors?.username?.message} />
        {/* 이메일 */}
        <Input {...register("email")} type="text" placeholder="이메일" />

        {/* 이름 */}
        <Input
          {...register("name", { required: "이름은 필수입니다." })}
          type="text"
          placeholder="이름"
        />
        <ErrorMessage text={errors?.name?.message} />

        {/* 패스워드 */}
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
        <ButtonUi active={isValid} text={"회원가입"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>
        <BottomWrap>
          아이디가 있으신가요? <Link to={"/login"}>Login</Link>
        </BottomWrap>
      </Form>
    </Wrap>
  );
};
