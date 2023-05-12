import { Question1 } from './Questions/Question1';
import { Routes, Route } from 'react-router-dom'
import { Question2 } from './Questions/Question2';
import { Navbar } from './Navbar';
import { Question3 } from './Questions/Question3';
import { Question4 } from './Questions/Question4';
import { Question5 } from './Questions/Question5';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Question1 />} />
        <Route path="/q2" element={<Question2 />} />
        <Route path="/q3" element={<Question3 />} />
        <Route path="/q4" element={<Question4 />} />
        <Route path="/q5" element={<Question5 />} />
      </Routes>
    </div>
  );
}

export default App;
