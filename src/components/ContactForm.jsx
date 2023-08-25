import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleAlertVisibility = (isMessageSent) => {
    setIsSuccess(isMessageSent);
    setShowAlert(true);
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log(formData);

    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, "messages"), formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          name="email"
          value={formData.email}
          placeholder="name@example.com"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="messageInput"
          name="message"
          rows="3"
          value={formData.message}
          placeholder="Write Something!"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Sent
        </button>
      </div>
      <div
        className="alert alert-success d-flex align-items-center mt-4 visible"
        role="alert"
        style={{ height: "40px" }}
      >
        <svg
          className="bi flex-shrink-0 me-2"
          role="img"
          aria-label="Success:"
          style={{ width: "20px" }}
        >
          <use xlinkHref="#check-circle-fill" />
        </svg>
        <div>Message Successfully Sent!</div>
      </div>
      <div
        className="alert alert-danger d-flex align-items-center invisible"
        role="alert"
        style={{ height: "40px" }}
      >
        <svg
          className="bi flex-shrink-0 me-2"
          role="img"
          aria-label="Danger:"
          style={{ width: "20px" }}
        >
          <use xlinkHref="#exclamation-triangle-fill" />
        </svg>
        <div>Failed to Sent Message</div>
      </div>
    </div>
  );
};

export default ContactForm;
