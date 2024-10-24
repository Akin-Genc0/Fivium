import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './pages/Careers'; 
import Nopage from './pages/nopage';    // 404 page or "not found" page
import Vacation from './pages/Vacation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Careers />} />
        <Route path="/Vacation" element={<Vacation />} /> {/* Add this line */}
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  );
}

export default App;

