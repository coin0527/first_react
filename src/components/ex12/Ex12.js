import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Mainpage } from "./pages/Mainpage";
export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/*" element={<ErrorPage />} /> */}

        <Route path="/" element={<Mainpage />} />
        {/* subpage작업해야함 토요일 */}
      </Routes>
    </BrowserRouter>
  );
};
