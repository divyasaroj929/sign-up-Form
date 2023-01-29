import React, { useState } from "react";
import "./login.css";
import { CiUnread } from "react-icons/ci";
import Submitpage from "./Submitpage";
import university from "./university.jpg";

const Login = () => {
  const [email, setEmail] = useState();
  const [erremail, setErremail] = useState(false);

  const [pass, setPass] = useState();
  const [errorpassword, setErrorpassword] = useState(false);

  const [checkpass, setCheckPass] = useState(false);
  const [ok, setOk] = useState(false);
  const emilregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleShow = () => {
    setCheckPass(!checkpass);
  };

  const hendlemail = (e) => {
    console.log("sdfghj");
    let email = e.target.value;
    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }
    setEmail(email);
  };

  const hendlepassword = (e) => {
    let pass = e.target.value;
    if (pass.length < 8) {
      setErrorpassword(true);
    } else {
      setErrorpassword(false);
    }
    setPass(pass);
  };

  const buttonSign = (e) => {
    e.preventDefault();

    let email = e.target[0].value;
    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }

    let pass = e.target[1].value;
    if (pass.length < 8) {
      setErrorpassword(true);
    } else {
      setErrorpassword(false);
    }

    if (email.match(emilregex) && !pass.length < 8) {
      alert("successfully login");
      setOk(true);
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
                  autoComplete="off"
                  id="mail"
                  className="email-input"
                  onChange={hendlemail}
                  value={email}
                />
                {erremail ? (
                  <span
                    style={{ fontSize: "9px", color: "red" }}
                    className="span-1"
                    id="span-1"
                  >
                    Enter your vaild email
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="password">
                <label className=" label-password">Enter your password</label>

                <input
                  placeholder="******"
                  className="input-password"
                  type={checkpass ? "text" : "password"}
                  id="password"
                  onChange={hendlepassword}
                  value={pass}
                />
                <CiUnread className="hide-label" onClick={handleShow} />
                {errorpassword ? (
                  <span
                    style={{ fontSize: "9px", color: "red" }}
                    className="span-2"
                    id="span-2"
                  >
                    password must be 8 digit
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className=" remember">
                <div className="input-remember">
                  <input type="checkbox" />
                  <span>Remind Me</span>
                </div>
                <div className="forgot">
                  <a href="#">Forgot password ? </a>
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
