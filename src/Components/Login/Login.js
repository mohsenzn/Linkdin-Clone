import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [proFilePic, SetPrfilePic] = useState("");

  return (
    <div className="login">
      <img
        src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-linkedin-logo.png"
        alt=""
      />
      <form>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={proFilePic}
          placeholder="Profile picture URL(Optional)"
          onChange={(e) => {
            SetPrfilePic(e.target.value);
          }}
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <button type="submit" onClick>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span  className="login__register">
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
