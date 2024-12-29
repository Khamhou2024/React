import "./FormComponent.css";
import { useState } from "react";
const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");

  const [erroruserName, setErrorUserName] = useState(
    "Please enter Username of 8 charector"
  );
  const [erroremail, setErrorEmail] = useState("Email format is invalid");
  const [errorpassword, setErrorPassword] = useState(
    "Password must contain 8 charector"
  );

  const [userNameColor, setUsernameClor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRepasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUsernameClor("green");
    } else {
      setErrorUserName("Please enter Username than 8 charector");
      setUsernameClor("red");
    }
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email format is invalid");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setPasswordColor("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must contain 8 charector");
      setPasswordColor("red");
    }
    if (rePasswordColor !== "" && rePasswordColor === passwordColor) {
      setRepasswordColor("");
      setRepasswordColor("green");
    } else {
      setRepasswordColor("Password must contain 8 charector");
      setRepasswordColor("red");
    }
  };
  return (
    <div className="container">
      <h2>Registration form</h2>
      <form className="form" onSubmit={validateForm}>
        <div className="form-contral">
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          ></input>
          <small style={{ color: userNameColor }}>{erroruserName}</small>
        </div>

        <div className="form-contral">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          ></input>
          <small style={{ color: emailColor }}>{erroremail}</small>
        </div>

        <div className="form-contral">
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          ></input>
          <small style={{ color: passwordColor }}>{errorpassword}</small>
        </div>

        <div className="form-contral">
          <label>Confirm password:</label>
          <input
            type="text"
            value={rePassword}
            onChange={(e) => setRepassword(e.target.value)}
            style={{ borderColor: rePasswordColor }}
          ></input>
          <small style={{ color: rePasswordColor }}></small>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
