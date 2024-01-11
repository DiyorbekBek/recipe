import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "recipe"), (snapshot) => {
      const resault = [];
      snapshot.docs.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        resault.push(todo);
        setDocuments(resault);
      });
    });
    return () => unsubscribe();
  }, []);
  return { documents };
}
