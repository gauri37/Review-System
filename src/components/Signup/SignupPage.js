import React from "react";
import styles from "./signupPage.module.scss";
import { Link } from "react-router-dom";

const SignupPage = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className={styles.signupform}>
        <div className={styles.signupformbox}>
          <form>
            <h1 className={styles.signuptext}>Sign Up</h1>

            <label htmlFor="usename">Username</label>
            <br></br>
            <input type="text" name="username" className={styles.signupbox} />
            <br></br>

            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className={styles.signupbox}
            />
            <br></br>

            <label htmlFor="confirmpassword">Confirm Password</label>
            <br></br>
            <input
              type="password"
              name="confirmpassword"
              className={styles.signupbox}
            />
            <br></br>

            <input type="submit" value="Signup" className={styles.signupbtn} />
            <Link to="/login" className={styles.backtoLogin}>
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
