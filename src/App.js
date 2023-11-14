// App.js
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Tp5 from './Tp5';
import CalcState from './CalcState';
import Slider from './Slider';
import Formtasks from './Formtasks';
import UseEffectTp from './UseEffectTp';

function App() {
  return (
    
      <div className="App">
        <Tp5 />
        <Routes>
          <Route path="/CalcState" element={<CalcState />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Formtasks" element={<Formtasks />} />
          <Route path="/UseEffectTp" element={<UseEffectTp />} />
        </Routes>
      </div>
    
  );
}

export default App;
