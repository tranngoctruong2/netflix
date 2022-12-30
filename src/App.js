import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Sigin from './pages/Sigin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={
           <Login/>
         
        }/>
        <Route exact path='/'element={<Netflix/>}/>
        <Route exact path='/home' element={
          
           <Home/>
          
            }/>
        <Route exact path='/sigin' element={<Sigin/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
