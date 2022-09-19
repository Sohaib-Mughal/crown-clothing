import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormfields] = useState({
    email: "",
    password: "",
  });

  const resetFormFields = () => {
    setFormfields(defaultFormFields);
  };

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormfields({ ...formFields, [name]: value });

    console.log(formFields);
  };

  const signInWithGoogle = async (e) => {
    const { user } = await signInWithGooglePopup();

    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response= await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect Password for email');
          break;
        
        case 'auth/user-not-found':
          alert("Their is no user with this email");
          break;
        default:
          console.log(error.code);
      }
    }
  };

  return (
    <div className="sign-up-form-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
