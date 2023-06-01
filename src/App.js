import logo from './logo.svg';
import FullPageScroll from './FullPageScroll';
import Navbar from './component/Navbar/navbar';
import './App.css';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
