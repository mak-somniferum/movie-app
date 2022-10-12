import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/MovieDetail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
