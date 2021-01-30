import React, { useState  } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./DemoLoginForm";

function DemoLoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("demo@aa.io");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ email, password }))
  };

  return (
    <div className="login-container">
      <h1>Demo Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default DemoLoginForm;