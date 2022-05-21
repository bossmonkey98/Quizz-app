import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Navbar} from './components/Navbar/Navbar'
import Categories from "./pages/categories/Categories";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import Rules from "./pages/rules/Rules";
import Quiz from "./pages/quiz/Quiz";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/quiz"  element={<Quiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
