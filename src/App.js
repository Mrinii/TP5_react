import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Tp5 from './Tp5';
import CalcState from  './CalcState';
import Slider from './Slider';
import Formtasks from './Formtasks';
import UseEffectTp from './UseEffectTp';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Tp5/>
      <Routes>
        <Route path='/TP5_react/CalcState' element={<CalcState/>}/>
        <Route path='/TP5_react/Slider' element={<Slider/>}/>
        <Route path='/TP5_react/Formtasks' element={<Formtasks/>}/>
        <Route path='/TP5_react/UseEffectTp' element={<UseEffectTp/>}/>
      </Routes>
    </div>
  );
}

export default App;