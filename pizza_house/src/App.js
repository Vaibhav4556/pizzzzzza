
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter,Routes,Route,Link,Switch} from "react-router-dom"
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
      <Routes>

        <Route  path= "/"  element={<Homescreen /> }/>
        <Route  path= "/cart"  element={<Cartscreen /> }/>
        <Route  path= "/login"  element={<Loginscreen /> }/>
        <Route  path= "/register"  element={<Registerscreen /> }/>

      </Routes>

      </BrowserRouter>
      {/* <Homescreen /> */}
    </div>
  );
}

export default App;
