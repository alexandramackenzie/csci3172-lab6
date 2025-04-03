import { useState } from "react";
import { Link } from "react-router-dom";


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const updatedForm = { ...form };
    const input = e.target;
  
    if (input.type === "checkbox") {
      updatedForm[input.name] = input.checked;
    } else {
      updatedForm[input.name] = input.value;
    }
  
    setForm(updatedForm);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (/[<>]/.test(form.message)) e.message = "No < or > symbols allowed";
    if (!form.message.trim()) e.message = "Message is required";
    if (!form.consent) e.consent = "Consent is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) return;
  
    await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "", consent: false });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Me</h1>
      {submitted && <div className="alert alert-success">Message sent!</div>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="form-control mb-2" />
        {errors.name && <div className="text-danger">{errors.name}</div>}

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-control mb-2" />
        {errors.email && <div className="text-danger">{errors.email}</div>}

        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="form-control mb-2" />
        {errors.subject && <div className="text-danger">{errors.subject}</div>}

        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="form-control mb-2" />
        {errors.message && <div className="text-danger">{errors.message}</div>}

        <div className="form-check mb-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="form-check-input" />
          <label className="form-check-label">I consent that I will be contacted using the information I provided, and that my information will be stored securely</label>
        </div>
        {errors.consent && <div className="text-danger">{errors.consent}</div>}

        <button type="submit" className="btn btn-primary mt-2">Send</button>
      </form>

      <div className="text-center mt-4 mb-4">
        <Link to="/messages" className="btn btn-outline-secondary">
          See Messages
        </Link>
      </div>

    </div>
    
  );
}

export default Contact;
