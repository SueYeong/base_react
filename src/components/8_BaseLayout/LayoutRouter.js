import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Sub1 } from "./Pages/Sub1";
import { Sub2 } from "./Pages/Sub2";

export const LayoutRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub1 />} />
        <Route path="/sub2" element={<Sub2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
