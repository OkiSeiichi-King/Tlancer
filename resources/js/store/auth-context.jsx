import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  userName: "",
  login: (token) => {},
  userLogIn: () => {},
  logout: () => {},
  setName: (name) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [userName, setUserName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // function for logging in
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // function for setting account type
  const accountHandler = (account) => {
    setAccountType(account);
    localStorage.setItem("account", account);
  };

  // function to set userLoggedIn to true
  const userLoginHandler = () => {
    setUserIsLoggedIn(true);
  };

  // function for logging out
  const logoutHandler = () => {
    console.log("logoutHandler Ran");
    setToken(null);
    setUserName("");
    setAccountType("");
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("account");
  };

  // function for setting user first name value
  const userNameHandler = (name) => {
    setUserName(name);
  };

  // Creates value for holding token and logged in data
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userName: userName,
    accountType: accountType,
    login: loginHandler,
    userLogIn: userLoginHandler,
    logout: logoutHandler,
    setName: userNameHandler,
    setAccount: accountHandler,
  };

  // console.log(
  //   "current token value: " + token + " current account type: " + accountType
  // );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
