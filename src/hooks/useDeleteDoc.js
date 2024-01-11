import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export function useDeleteDoc() {
  const deletedoc = async (col, id) => {
    await deleteDoc(doc(db, col, id));
    toast.success("You deleted todo");
  };
  return { deletedoc };
}
