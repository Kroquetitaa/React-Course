import React, { useContext } from "react";
import { SWContext } from "../context/context";

const LoginLogout = () => {
  const { loginUser, logoutUser } = useContext(SWContext);
  return (
    <div>
      <button onClick={() => loginUser()}>Login</button>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  );
};

export default LoginLogout;