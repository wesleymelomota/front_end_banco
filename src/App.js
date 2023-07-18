import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import {  BrowserRouter} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Route from './components/router/Route';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Route/>
      </div>
    </BrowserRouter>
    
  </>
  );
}

export default App;
