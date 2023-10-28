import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Mainpage } from "./pages/Mainpage";
import { Subs01 } from "./pages/Subs01";
import { Subs02 } from "./pages/Subs02";
import { Errorpages } from "./pages/Errorpages";
export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/subs01" element={<Subs01 />} />
        <Route path="/subs02" element={<Subs02 />} />
        <Route path="/*" element={<Errorpages />} />
        {/* subpage작업해야함 토요일 */}
      </Routes>
    </BrowserRouter>
  );
};
