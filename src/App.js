import { Routes, Route, HashRouter} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/MovieDetail/:id" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
