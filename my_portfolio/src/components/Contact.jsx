import React from "react";
import "./Contact.css";
export default function Contact() {
  //* all this data is copy paste from web3 from website
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // from that inserted access - key
    formData.append("access_key", "601e7cfb-de90-442b-9821-20ecb7db54dd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    // used fake api web from
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message); // insert alert for email send sucessfully
    }
  };

  //* up to here data is pased from web3form website
  return (
    <div id="contact" class="contact-section">
      <div class="contact-left">
        <h1>Contact</h1>
        <p>
          If you have any questions, feel free to reach out to me through the
          following contact information:
        </p>

        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>Email: amrutanighot716@email.com</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone-alt"></i>
            <span>Phone: 9167262014</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Location: Thane, Mumbai, India</span>
          </div>
        </div>
      </div>

      <div class="contact-right">
        <h1>Get In Touch</h1>
        <form class="contact-form" onSubmit={onSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
