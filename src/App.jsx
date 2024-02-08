import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
