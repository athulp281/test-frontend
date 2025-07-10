"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/lead", formData);
      alert("Lead submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      alert("Submission failed.");
      console.error(err);
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 500, margin: "auto" }}>
      <h2>Lead Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
