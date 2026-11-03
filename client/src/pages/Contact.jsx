import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); 
    alert("Back to homepage. Press OK to continue.");
    navigate('/'); 
  }

  return (
    <div className="contact-container">
      <h1>Contact Form</h1>
   
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="tel" placeholder="Contact Number" />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}