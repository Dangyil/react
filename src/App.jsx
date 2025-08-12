import { useState } from 'react' // React hooks for state and side effects
import { useEffect } from 'react'
import './index.css'
import './App.css'

// ValidationForm component
export default function ValidationForm() {
  const [formData, setFormData] = useState({ // state for form input values
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // Error and button disable state
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  // Form fields array configuration
  const fields = [
    { name: "firstName", placeholder: "First name" },
    { name: "lastName", placeholder: "Last name" },
    { name: "email", placeholder: "Email" },
    { name: "password", placeholder: "Password" }
  ];

  // Field validation function
  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          message = 'First name cannot be empty';
        }
        break;

      case 'lastName':
        if (!value.trim()) {
          message = 'Last name cannot be empty';
        }
        break;

      case 'email':
        if (!value.trim()) {
          message = 'Email address cannot be empty';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (!value.trim()) {
          message = 'Password cannot be empty';
        } else if (value.length < 6) {
          message = 'Password must be at least 6 characters';
        }
        break;

      default:
        break;
    }
    
    return message; // return the error message (or empty string if valid)
  };

  // Full form validation function
  const validate = () => {
    let objErrors = {}; // object to store all errors
    let isValid = true; // flag to track overall validity

    // Validate each field
    for (let field of fields) {
      const message = validateField(field.name, formData[field.name]);
      if (message) { // if there is an error
        objErrors[field.name] = message;
        isValid = false; // mark form as invalid
      }
    }

    setErrors(objErrors); // save error in state
    return isValid;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // update the specific field in formData
    setErrors({...errors, [name]: validateField(name, value)}); // validate only this field and store/update its error
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
     if (validate()) { // if form is valid
      alert('Form submitted successfully!');
      setFormData({ firstName: '', lastName: '', email: '', password: '' }); // clear all inputs
      setErrors({}); // clear error messages
    }
  };

  // Prevent submission if there are validation errors
  useEffect(() => {
    const hasErrors = Object.values(errors).some(error => error);
    setIsDisabled(hasErrors);
  }, [formData, errors]);

  return (
    <div id="overall">
      <div id="left">
        <h1>Learn to code by watching others</h1>
        <p id="see">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is
          great, but understanding how developers think is invaluable.
        </p>
      </div>

      <div id="right">
        <div id="purple-box">
          <p id="try">
            Try it free 7 days <span id="then">then $20/mo. thereafter</span>
          </p>
        </div>
    <form id="myForm" onSubmit={handleSubmit} noValidate>
      {fields.map((field) => (
        <label key={field.name}>
          <div className="input-wrapper">
            <input
              type={field.name === "email" ? "email" : field.name === "password" ? "password" : "text"}
              name={field.name}
              placeholder={errors[field.name] ? "" : field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className={errors[field.name] ? 'error' : ''}
              />
           <span className="error-icon" style={{ display: errors[field.name] ? 'inline-block' : 'none' }}   >
                  !
           </span>
              </div>
              <span className="error">{errors[field.name]}</span>
        </label>
      ))}

      <button
            type="submit"
            disabled={isDisabled}
            >
            CLAIM YOUR FREE TRIAL
          </button>
      <p id="terms">
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </p>
    </form>
    </div> 
   </div>
  );
}