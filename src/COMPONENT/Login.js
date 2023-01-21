import React, { useState } from "react";
import "./login.css";
import { CiUnread } from "react-icons/ci";
import Submitpage from "./Submitpage";
import university from "./university.jpg";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [ok, setOk] = useState(false);
  const emilregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleShow = () => {
    setPass(!pass);
  };

  const buttonSign = (event) => {
    event.preventDefault();

    const Email = document.getElementById("mail").value;
    const pass = document.getElementById("password").value;

    if (!Email.match(emilregex)) {
      document.getElementById("span-1").innerHTML = "invalid email";
    } else if (pass.length < 6) {
      document.getElementById("span-2").innerHTML =
        "Password must be at least 6 chars long";
    } else {
      document.getElementById("mail").value = "";
      setOk(true);
      console.log(Email);
    }
  };
  console.log("hgu");
  if (ok === false)
    return (
      <>
        <div className="login-page">
          <div className="login">
            <form className="login-form" onSubmit={buttonSign}>
              <div className=" login-box">Login</div>
              <div className="email">
                <label className=" email-label">Enter your Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  // autoComplete="off"
                  // required
                  id="mail"
                  className="email-input"
                />
                <span
                  style={{ fontSize: "9px", color: "red" }}
                  className="span-1"
                  id="span-1"
                ></span>
              </div>
              <div className="password">
                <label className=" label-password">Enter your password</label>

                <input
                  placeholder="******"
                  className="input-password"
                  type={pass ? "text" : "password"}
                  id="password"
                />
                <CiUnread className="hide-label" onClick={handleShow} />
                <span
                  style={{ fontSize: "9px", color: "red" }}
                  className="span-2"
                  id="span-2"
                ></span>
              </div>
              <div className=" remember">
                <div className="input-remember">
                  <input type="checkbox" />
                  <span>Remind Me</span>
                </div>
                <div className="forgot">
                  <a href="#">forgot password ? </a>
                </div>
              </div>
              <div className="btn">
                <button className="submit">login</button>
              </div>
            </form>
            <div className="university">
              <img src={university} alt="img" className=" login-logo" />
            </div>
          </div>
        </div>
      </>
    );
  console.log("click");
  return <Submitpage />;
};
export default Login;
