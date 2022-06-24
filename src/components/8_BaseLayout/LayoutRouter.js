import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { contents, sub_1, sub_2 } from "./contents";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Sub } from "./Pages/Sub";

export const LayoutRouter = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub1" element={<Sub cons={sub_1} />} />
          <Route path="/sub2" element={<Sub cons={sub_2} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
