// import React, { useState } from "react"
// import logo from "../Images/patus.png"
// import "./login.css"

// export default function Login() {
//   const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

// const errors = {
//   uname: "invalid username",
//   pass: "invalid password"
// };  

// const database = [
//   {
//     username: "user1",
//     password: "pass1"
//   },
//   {
//     username: "user2",
//     password: "pass2"
//   }
// ];

// const handleSubmit = (event) => {
//   //Prevent page reload
//   event.preventDefault();

//   var { uname, pass } = document.forms[0];

//   // Find user login info
//   const userData = database.find((user) => user.username === uname.value);

//   // Compare user info
//   if (userData) {
//     if (userData.password !== pass.value) {
//       // Invalid password
//       setErrorMessages({ name: "pass", message: errors.pass });
//     } else {
//       setIsSubmitted(true);
//     }
//   } else {
//     // Username not found
//     setErrorMessages({ name: "uname", message: errors.uname });
//   }

// };

// // Generate JSX code for error message
// const renderErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );


//   const renderForm = (
//       <form className="forma">
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         <div className="borderline"></div> 
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="in">
//         <a className="clickme" onClick={handleSubmit}>LOGIN</a>
//         </div>   
//       </form>
//  );
  
  
//   return (
//     <div className="login">
//        {/* <div className="login-logo"><img id="login-logo" src={logo} alt="logo"></img></div>, */}
//       {renderForm}
//     </div>
//   )
// }


import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
  };

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;