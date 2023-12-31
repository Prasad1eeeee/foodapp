
import './App.css';


//import Home from './screens/Home';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import Cart from './screens/Cart.js';
import Myorder from './screens/Myorder.js';
function App() {
  return (
    <Router>

      <div>
        <Routes>
          <Route exact path='/cart'element={<Cart></Cart>}></Route>
          <Route exact path='/' element={<Homepage></Homepage>}></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/createuser' element={<Signup></Signup>}></Route>
          <Route exact path='/myorder' element={<Myorder></Myorder>}></Route>
          
        </Routes>
      </div>


    </Router>


  );
}

export default App;
