import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
  };

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/");
    })
    .catch((error) => {
      setError(true);
    });
  return (
    <div>
      <div className="sign-up">
        <form onSubmit={handleSignup} className="sign-up__form">
          <input
            type="email"
            placeholder="Johndoe@gmail.com"
            className="sign-up__input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password123"
            className="sign-up__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign-Up</button>
        </form>
      </div>
    </div>
  );
}
