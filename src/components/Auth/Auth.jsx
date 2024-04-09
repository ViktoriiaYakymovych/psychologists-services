import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    const userEmail = e.target.elements.email.value;
    const userPassword = e.target.elements.password.value;
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).")
        alert("Email already in use");
    } finally {
      e.target.reset();
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
      // if (error.message === "Firebase: Error (auth/email-already-in-use).")
      //   alert("Email already in use");
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      // if (error.message === "Firebase: Error (auth/email-already-in-use).")
      //   alert("Email already in use");
    }
  };

  return (
    <form onSubmit={(e) => signIn(e)}>
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sing in</button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={logOut}>Log out</button>
    </form>
  );
};

export default Auth;
