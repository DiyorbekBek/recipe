import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  // signUP finction
  const signup = (displayName, photoUrl, email, password) => {
    dispatch({ type: "IS_PANDING", payload: true });

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL: photoUrl,
        });
        toast.success("Welcome !");
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PANDING", payload: false });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        dispatch({ type: "IS_PANDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };

  //   signUP With
  const signUpWithGoogleProvider = () => {
    dispatch({ type: "IS_PANDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        toast.success("Welcome Back!");
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "IS_PANDING", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        dispatch({ type: "IS_PANDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };
  return { signUpWithGoogleProvider, signup };
}
