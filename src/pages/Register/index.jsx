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

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: data.username,
          photoURL: data.avatar,
        })
          .then(() => {
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
  console.log(data);
  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.t}>Register</h2>
        <form className={style.box} onSubmit={handleSubmit}>
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
            <p className={style.lastTetx}>Already a member?</p>
            <Link to="/login" className={style.logintext}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
