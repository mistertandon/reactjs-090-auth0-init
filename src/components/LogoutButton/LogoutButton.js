import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <button onClick={() => logout({ returnTo: "/home" })}> Log Out</button>
    </>
  );
};

export default LoginButton;
