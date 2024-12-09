import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h1>Login</h1>
        <div className="form-field">
          <Userid />
        </div>
        <div className="form-field">
          <Password />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

function Userid() {
  const [user, setUser] = useState("");

  function handleUserid(e) {
    setUser(e.target.value);
  }

  return (
    <div>
      <label>User ID</label>
      <input
        type="text"
        placeholder="Enter User ID"
        value={user}
        onChange={handleUserid}
      />
    </div>
  );
}

function Password() {
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function toggleVisibility() {
    setVisibility(!visibility);
  }

  return (
    <div>
      <label>Password</label>
      <div className="password-container">
        <input
          type={visibility ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={handlePassword}
        />
        <button className="visibility-toggle" onClick={toggleVisibility}>
          {visibility ? "👁️" : "🕶️"}
        </button>
      </div>
    </div>
  );
}
