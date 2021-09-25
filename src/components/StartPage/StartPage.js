import React from "react";
import styles from "../StartPage/StartPage.module.scss";
import LoginPage from "../Login/LoginPage";
import SearchPage from "../Search/SearchPage";

class StartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isBtnClicked: false,
      isLoggedIn: false,
    };
    this.btnClicked = this.btnClicked.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  btnClicked() {
    this.setState({
      isBtnClicked: true,
    });
  }

  loginHandler(username, password) {
    if (username.trim() !== "" && password.trim() !== "") {
      if (username === "abcd" && password === "abcd") {
        this.setState({
          isLoggedIn: true,
        });
      } else {
        alert("Wrong username and Password");
      }
    } else {
      alert("all fields must be compulsury");
    }
  }
  render() {
    return this.state.isLoggedIn ? (
      <SearchPage />
    ) : this.state.isBtnClicked ? (
      <LoginPage loginHandler={this.loginHandler} />
    ) : (
      <div className={styles.backImage}>
        <button className={styles.gotoLogin} onClick={this.btnClicked}>
          Get Started Now!
        </button>
      </div>
    );
  }
}

export default StartPage;
