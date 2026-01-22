function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>MyApp</h1>
        <p style={subtitleStyle}>Your Amazing React SPA</p>
      </div>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '2rem 0',
  textAlign: 'center',
  borderBottom: '3px solid #61dafb'
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  
  padding: '0 1rem'
}

const titleStyle = {
  margin: '0 0 0.5rem 0',
  fontSize: '2.5rem'
}

const subtitleStyle = {
  margin: 0,
  fontSize: '1rem',
  opacity: 0.7
}

export default Header
