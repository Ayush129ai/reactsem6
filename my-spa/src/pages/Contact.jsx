function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch with us!</p>
      <p>This is the contact page where users can reach out to our team.</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
