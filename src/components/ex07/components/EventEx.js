import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);
  //let num = 0;
  // 플러스부분은 버튼부분으로 뺀 예시로 했음.
  const minusHandler = () => setNum(num - 1);

  return (
    <div>
      <h3> 클릭할때 숫자 증감</h3>
      <h3> {num} </h3>

      <button onClick={() => setNum(num + 1)}> + </button>
      <button onClick={minusHandler}> - </button>
    </div>
  );
};

// useState()
// react hook 중 하나로 변수를 정의하고 값을 변경할때 사용
// 배열 비구조화 할당을 이용하여 첫번째 값은 변수, 두번째 값은 변경가능한 변수로 정의
// 단 set이라는 이름을 붙여줘야하고 카멜케이스로 작성
// ex> const [변수명, set변수명] = userState(변수값);
