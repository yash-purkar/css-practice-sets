

import { Question1 } from './Questions/Question1';
import { Routes, Route } from 'react-router-dom'
import { Question2 } from './Questions/Question2';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Question1 />} />
        <Route path="/q2" element={<Question2 />} />
      </Routes>
    </div>
  );
}

export default App;
