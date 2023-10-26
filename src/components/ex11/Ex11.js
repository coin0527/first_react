import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { Mainpage } from "./pages/Mainpage";
import { Error } from "./pages/Error";
import { Header } from "./components/Header";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* 라우터 설정하기 -> npm i react-router-dom */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Mainpage />} />
    //     <Route path="/sub01" element={<Sub01 />} />
    //     <Route path="/sub02" element={<Sub02 />} />
    //   </Routes>
    // </HashRouter>
  );
};

// 브라우저 라우터는 .. /하고 페이지를 적으면 움직임
// 해쉬 라우터는 /#/를 붙이고 적으면 페이지를 움직일수있음.
