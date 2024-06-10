import { useState } from "preact/hooks";


export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");
    // const errors = { name: "", email: "", phone: "", message: "", terms: "", service: "" };

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        <span>Name:</span>
        <input type="text" id="name" name="name" required />
      </label>
      {responseMessage && <p>{responseMessage}</p>}


      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>

      <label>
        Phone
        <input type="tel" id="phone" name="phone" required />
      </label>      

      <div class="form_group">
        <label for="service">
          <span>Service to consult</span>
        </label>
        <div class="select">

        <select id="service" name="service" required>                
          <option class="disabled" value="" disabled selected >Service to Consult</option>
          <option value="consulting">Consulting</option>
          <option value="Social Media Strategy">Social Media Strategy</option>
          <option value="Content Creation">Content Creation</option>
          <option value="Paid Media &amp; Growth">Paid Media &amp; Growth</option>
          <option value="design">Design</option>
          <option value="Branding">Branding</option>
          <option value="Web Design">Web Design</option>
          <option value="development">Development</option>
          <option value="Motion &amp; 3D Design">Motion &amp; 3D Design</option>
          <option value="Video">Video</option>
        </select>
        </div>
      </div>

      <label>
        Message
        <textarea id="message" name="message" required />
      </label>

      <button>Send</button>

      {responseMessage && <p>{responseMessage}</p>}

    </form>
  );
}

import '../styles/forms.css';
