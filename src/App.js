import logo from './logo.svg';
import FullPageScroll from './FullPageScroll';
import Navbar from './component/Navbar/navbar';
import './App.css';
import DashBoard from "./component/DahsBoard/DashBoard";
import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FullPageScroll/>}/>
        <Route path="/Dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
