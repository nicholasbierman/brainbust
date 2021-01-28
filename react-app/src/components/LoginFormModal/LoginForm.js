import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/profile" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log("hi")
    return dispatch(sessionActions.login({ email, password }))
            .then(res => history.push("/profile"))
            .catch((res) => { if (res.data && res.data.errors) setErrors(res.data.errors) }
    );
  };

  return (
    <div className="login-container">
      <h1>Log In</h1>
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

export default LoginForm;