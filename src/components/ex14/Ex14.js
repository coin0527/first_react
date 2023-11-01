import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Errorpage } from "./pages/Errorpage";

export const Ex14 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};
// 그냥 패스를 지정해주는 페이지
