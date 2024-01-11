import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  const login = (email, password) => {
    dispatch({ type: "IS_PANDING", payload: true });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Welcome to back !");
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
  return { login };
}
