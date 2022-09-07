import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
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

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>This is a sign in PAge</h1>
      <button onClick={signInWithGoogle}>Sign in With Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
