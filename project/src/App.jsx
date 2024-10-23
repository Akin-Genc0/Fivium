import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers'; 
import Nopage from './pages/nopage';    // 404 page or "not found" page

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Careers />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  );
}

export default App;
