// import React, { useState } from "react";
// import style from "./style.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../../firebase/config";
// function Register() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     username: "",
//     avatar: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data.email, data.password);
//     createUserWithEmailAndPassword(auth, data.email, data.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         updateProfile(auth.currentUser, {
//           displayName: data.username,
//           photoURL: data.avatar,
//         })
//           .then(() => {
//             dispatch(login(auth.currentUser.providerData[0]));
//             navigate("/");
//           })
//           .finally(() =>
//             localStorage.setItem(
//               "user",
//               JSON.stringify(auth.currentUser.providerData[0])
//             )
//           );
//         navigate("/");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//       });
//   };

//   return (
//     <>
//       <div className={style.wrapper}>
//         <h2 className={style.t}>Register</h2>
//         <form className={style.box} onSubmit={handleSubmit}>
//           <div className={style.usernameDiv}>
//             <p className={style.inputText}>Username</p>
//             <input
//               type="text"
//               className={style.input}
//               value={data.username}
//               onChange={(e) => setData({ ...data, username: e.target.value })}
//             />
//           </div>
//           <div className={style.avatarDiv}>
//             <p className={style.inputText}>Avatar</p>
//             <input
//               type="url"
//               className={style.input}
//               value={data.avatar}
//               onChange={(e) => setData({ ...data, avatar: e.target.value })}
//             />
//           </div>
//           <div className={style.emailDiv}>
//             <p className={style.inputText}>email</p>
//             <input
//               type="email"
//               className={style.input}
//               value={data.email}
//               onChange={(e) => setData({ ...data, email: e.target.value })}
//             />
//           </div>
//           <div className={style.passwordDiv}>
//             <p className={style.inputText}>password</p>
//             <input
//               type="text"
//               className={style.input}
//               value={data.password}
//               onChange={(e) => setData({ ...data, password: e.target.value })}
//             />
//           </div>
//           <button type="submit" className={style.btn}>
//             Register
//           </button>
//           <div className={style.lastDiv}>
//             <p className={style.lastTetx}>Already a memeber?</p>
//             <Link to="/login" className={style.logintext}>
//               Login
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Register;

import React, { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    avatar: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simple password validation
    if (!data.password || data.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    // All clear, proceed with registration
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: data.username,
          photoURL: data.avatar,
        })
          .then(() => {
            // After successful registration and profile update
            navigate("/");
          })
          .finally(() =>
            localStorage.setItem(
              "user",
              JSON.stringify(auth.currentUser.providerData[0])
            )
          );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.t}>Register</h2>
        <form className={style.box} onSubmit={handleSubmit}>
          {/* {error && <p className={style.error}>{error}</p>} */}
          <div className={style.usernameDiv}>
            <p className={style.inputText}>Username</p>
            <input
              type="text"
              className={style.input}
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div className={style.avatarDiv}>
            <p className={style.inputText}>Avatar</p>
            <input
              type="url"
              className={style.input}
              value={data.avatar}
              onChange={(e) => setData({ ...data, avatar: e.target.value })}
            />
          </div>
          <div className={style.emailDiv}>
            <p className={style.inputText}>Email</p>
            <input
              type="email"
              className={style.input}
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className={style.passwordDiv}>
            <p className={style.inputText}>Password</p>
            <input
              type="password"
              className={style.input}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button type="submit" className={style.btn}>
            Register
          </button>
          <div className={style.lastDiv}>
            <p className={style.lastText}>Already a member?</p>
            <Link to="/login" className={style.loginText}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
