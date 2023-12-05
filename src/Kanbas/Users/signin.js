import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("../Account");
  };

  const toSignup = async () => {
    navigate("../Signup");
  }

  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={signin} className='btn btn-primary'> Signin </button>
      <button onClick={toSignup} className='btn btn-secondary'>To Signup </button>
    </div>
  );
}
export default Signin;