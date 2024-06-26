import React, { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

function Login() {
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: logindata.email === "",
      password: logindata.password === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    signInWithEmailAndPassword(auth, logindata.email, logindata.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user.providerData));
        localStorage.setItem("rasm", user.photoURL);
        localStorage.setItem("userData", JSON.stringify(userCredential.user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.t}>Login</h2>
        <form className={style.box} onSubmit={handleSubmit}>
          <div className={style.emailDiv}>
            <p className={style.inputText}>email</p>
            <input
              type="email"
              className={`${style.input} ${errors.email ? style.error : ""}`}
              value={logindata.email}
              onChange={(e) =>
                setLoginData({ ...logindata, email: e.target.value })
              }
            />
          </div>
          <div className={style.passwordDiv}>
            <p className={style.inputText}>password</p>
            <input
              type="password"
              className={`${style.input} ${errors.password ? style.error : ""}`}
              value={logindata.password}
              onChange={(e) =>
                setLoginData({ ...logindata, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className={style.btn}>
            LOGIN
          </button>
          <button type="button" className={style.btnn}>
            GUEST USER
          </button>
          <div className={style.lastDiv}>
            <p className={style.lastText}>Not a member yet?</p>
            <Link to="/register" className={style.loginText}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
