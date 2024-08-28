import React from "react";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { logout, user, isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>{isAuthenticated ? <Home /> : <div>No user data to display</div>};</>
  );
};

export default App;
