import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss"


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormfields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const resetFormFields = () => {
    setFormfields(defaultFormFields);
  };

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormfields({ ...formFields, [name]: value });

    console.log(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Both Passwords Should Match");
      return;
    } else {
      setError("");
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        const userDocRef = await createUserDocFromAuth(user, { displayName });
        console.log(userDocRef);
        resetFormFields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("Email is already in use, Please use another email");
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="sign-up-form-container">
        <h2>Don't have an Account?</h2>
        <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Name"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />

        
        <FormInput
        label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput  
        label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <FormInput
        label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default SignUpForm;
