export const Intro = ({ name, age, job }) => {
  //   const name = props.name;
  //   const age = props.age;
  // 객체 비구조화 할당
  //   const { name, age } = props;

  return (
    <div>
      <h2> 자기소개 </h2>
      <h3> 이름: {name}</h3>
      <h3> 나이: {age}</h3>
      <h3> 일: {job}</h3>
      <hr />
    </div>
  );
};

// jsx 문법 내부에서 변수를 사용할 땐 중괄호를 사용할 것
