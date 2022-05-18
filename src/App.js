import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Navbar} from './components/Navbar/Navbar'
import Categories from "./pages/categories/Categories";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
