import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Main from '../pages/main.jsx';
import NotFound from '../pages/notFound.jsx';
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../assets/bgimg.jpg';
import '../styles/Style.css';

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="bg-dark text-white" style={bgStyle}>
    <Router>
      <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
    </Router>
    </div>
  )
}

export default App