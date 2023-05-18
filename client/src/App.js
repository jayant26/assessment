import { BrowserRouter as Router, Route, Redirect ,Routes} from "react-router-dom";
import './App.css';

import Registration from "./Pages/Registration";
import Home from './Pages/Home';
function App() {
  return (
   <Router>
      <Routes>
        {/* <Route exact path="/register" element={<Register/>} ></Route> */}
        <Route exact path ="/" element={<Registration/>}></Route>
        <Route exact path="/home/:id" element={<Home/>}></Route>
      </Routes>
      
   </Router>
  );
}

export default App;
