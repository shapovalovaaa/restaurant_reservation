import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Restaurant from "./pages/restaurant/Restaurant";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ListType from "./pages/list/ListType";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<List />} />
        <Route path="/restaurants/type" element={<ListType />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
