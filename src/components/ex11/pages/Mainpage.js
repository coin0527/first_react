import { Pagetitle } from "../components/Pagetitle";

export const Mainpage = () => {
  return (
    <div>
      <Pagetitle name={"homeeee"} />
      <hr />
      <h3>Home </h3>
    </div>
  );
};

// router ->경로설정
// <BrowserRouter> <Routes> <Route> 순으로 진행됨
// 링크를 사용할땐 a태그가 아닌 Link 컴포넌트를 사용한다.
// 왜냐하면, 리액트는 새로고침이 되면 안되는 사이트이기 때문이다.
