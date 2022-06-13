// import React, { useState } from "react"


// import "./login.css"

// export default function Register() {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
  

//   const renderForm = (
//     <form className="forma">
//       <div className="input-container">
//         <label>Email </label>
//         <input type="text" name="uname" required />
//       <div className="borderline"></div> 
//         <label>Password </label>
//         <input type="password" name="pass" required />
//         <div className="borderline"></div> 
//         <label> Repeat Password </label>
//         <input type="password" name="pass" required />
//       </div>
     
//       <div className="in2">
//       <a className="clickme" onClick={console.log("hey")}>JOIN</a>
//       </div>   
//     </form>
//   )



//   return(
//     <div className="login">
//       {renderForm}
//     </div>
// )
// }

import React, { useState } from "react";
import { auth, db } from "../firebase";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };

  return (
    <div>
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        ></input>
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        ></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;