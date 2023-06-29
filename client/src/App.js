// import logo from './logo.svg';
import "./App.css";
import SearchPage from "./components/SearchPage";
// import GoogleLogo from'../images/GoogleLogo.png';
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
      </Routes>
      <Aboutus/>
    </div>
    </Router>
  );
}

export default App;
