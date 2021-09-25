import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";

const LoginPage = ({ isShowLogin, loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className={styles.loginform}>
        <div className={styles.formbox}>
          <form>
            <h1 className={styles.logintext}>Sign In</h1>
            <label htmlFor="usename">Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              className={styles.loginbox}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br></br>
            <label htmlFor="pass">Password</label>
            <br></br>
            <input
              type="password"
              name="pass"
              className={styles.loginbox}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br></br>

            <button
              className={styles.loginbtn}
              onClick={() => loginHandler(username, password)}
            >
              Login
            </button>

            <Link to="/signup" className={styles.newaccount}>
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
