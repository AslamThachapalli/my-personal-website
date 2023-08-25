import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Alert from "./Alert";

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

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
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
    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, "messages"), formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      handleAlertVisibility(true);
    } catch (e) {
      console.error("Error adding document: ", e);
      handleAlertVisibility(false);
    }
  };

  return (
    <div>
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

      <Alert isSuccess={isSuccess} shouldShow={showAlert} />
    </div>
  );
};

export default ContactForm;
