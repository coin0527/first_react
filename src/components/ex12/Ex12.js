import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Mainpage } from "./pages/Mainpage";
import { Errorpages } from "./pages/Errorpages";
import { Sub } from "./pages/Sub";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub/:id" element={<Sub />} />
        <Route path="/*" element={<Errorpages />} />
      </Routes>
    </BrowserRouter>
  );
};
