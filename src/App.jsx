import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";

function App() {
  const [newname, setNewname] = useState("");
  const [newaged, setNewaged] = useState(0);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newname, aged: Number(newaged) });
  };
  const update = async (id, aged) => {
    const userDoc = doc(db, "users", id);
    const newField = { aged: aged + 1 };
    await updateDoc(userDoc, newField);
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getuser();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name..."
        onChange={(e) => setNewname(e.target.value)}
      />
      <input
        type="number"
        placeholder="age..."
        onChange={(e) => setNewaged(e.target.value)}
      />
      <button onClick={createUser}>create a user</button>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h2>{user.aged}</h2>
          <button onClick={() => update(user.id, user.aged)}>
            increase aged
          </button>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
