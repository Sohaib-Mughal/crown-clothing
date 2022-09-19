// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './auth.styles.scss'
/* import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils"; */

const Auth = () => {
  // useEffect(()=>{
  //     const redirectResult=async ()=>{
  //         const response= await getRedirectResult(auth);
  //         console.log(response);

  //         if(response){
  //            const userDocRef= createUserDocFromAuth(response.user);
  //            console.log(userDocRef);
  //         }
  //     }
  //     redirectResult();
  // }, [])

  

  return (
    <div className="authentication-container">
      {/* <h1>This is a sign in PAge</h1> */}
      {/* <button onClick={signInWithGoogle}>Sign in With Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button> */}
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Auth;
