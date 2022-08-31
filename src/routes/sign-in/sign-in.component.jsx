import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const signInWithGoogle= async ()=>{
        const response= await signInWithGooglePopup();

        const userDocRef= await createUserDocFromAuth(response.user);
        console.log(userDocRef);

    }

  return (
    <div>
      <h1>This is a sign in PAge</h1>
      <button onClick={signInWithGoogle}>Sign in With Google Popup</button>
    </div>
  );
};

export default SignIn;
