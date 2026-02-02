import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MuiVsBootstrap from './pages/react-class/MuiVsBootstrap'
import './App.css' 

function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/react-class" style={linkStyle}>React Class</Link> 
      </nav>
      
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/react-class" element={<MuiVsBootstrap />} />
        </Routes>
      </main>
    </Router>
  )
}

const navStyle = {
  backgroundColor: '#333',
  padding: '1rem',
  marginBottom: '2rem'
}

const linkStyle = {
  color: 'white',
  marginRight: '1.5rem',
  textDecoration: 'none',
  fontSize: '1.1rem'
}

const mainStyle = {
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto'
}

export default App
