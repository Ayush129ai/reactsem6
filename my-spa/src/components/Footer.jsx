function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {currentYear} MyApp. All rights reserved.</p>
        <p style={linkStyle}>
          <a href="#" style={anchorStyle}>Privacy Policy</a> | 
          <a href="#" style={anchorStyle}> Terms of Service</a> | 
          <a href="#" style={anchorStyle}> Contact Us</a>
        </p>
      </div>
    </footer>
  )
}

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '2rem 0',
  textAlign: 'center',
  marginTop: '4rem',
  borderTop: '3px solid #61dafb'
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem'
}

const linkStyle = {
  margin: '0.5rem 0 0 0'
}

const anchorStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  margin: '0 0.5rem'
}

export default Footer
