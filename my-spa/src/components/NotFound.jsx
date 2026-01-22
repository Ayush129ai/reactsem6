import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <h2 style={subtitleStyle}>Page Not Found</h2>
      <p style={textStyle}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={linkStyle}>Go Back to Home</Link>
    </div>
  )
}

const containerStyle = {
  textAlign: 'center',
  padding: '4rem 2rem'
}

const titleStyle = {
  fontSize: '4rem',
  color: '#61dafb',
  margin: '0'
}

const subtitleStyle = {
  fontSize: '2rem',
  color: '#282c34',
  margin: '1rem 0'
}

const textStyle = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '2rem'
}

const linkStyle = {
  display: 'inline-block',
  backgroundColor: '#61dafb',
  color: '#282c34',
  padding: '0.75rem 1.5rem',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem'
}

export default NotFound
