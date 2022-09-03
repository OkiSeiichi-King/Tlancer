import { useState, createContext } from "react";
const SignupContext = createContext();

export const SignUpContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const emailHandler = (email) => {
    setEmail(email);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = (pass) => {
    setPassword(pass);
  };

  const [verify_code, setVerifyCode] = useState("");
  const verifyCodeHandler = (code) => {
    setVerifyCode(code);
  };

  const [token, setToken] = useState("");
  const tokenHandler = (token) => {
    setToken(token);
  };

  const [account, setAccount] = useState("");
  const accountHandler = (acc) => {
    setAccount(acc);
  };

  const [first_name, setFirstName] = useState("");
  const firstNameHandler = (fname) => {
    setFirstName(fname);
  };

  const [last_name, setLastName] = useState("");
  const lastNameHandler = (lname) => {
    setLastName(lname);
  };

  const [date, setDate] = useState("");
  const dateHandler = (dob) => {
    setDate(dob);
  };

  const [location, setLocation] = useState("");
  const locationHandler = (loc) => {
    setLocation(loc);
  };

  const [phone, setPhone] = useState("");
  const phoneHandler = (num) => {
    setPhone(num);
  };
  const signUpContextValue = {
    data: {
      email: email,
      password: password,
      account: account,
      first_name: first_name,
      last_name: last_name,
      date: date,
      location: location,
      phone: phone,
      verify_code: verify_code,
      token: token,
    },
    actions: {
      emailHandler: emailHandler,
      passwordHandler: passwordHandler,
      accountHandler: accountHandler,
      dateHandler: dateHandler,
      locationHandler: locationHandler,
      phoneHandler: phoneHandler,
      firstNameHandler: firstNameHandler,
      lastNameHandler: lastNameHandler,
      verifyCodeHandler: verifyCodeHandler,
      tokenHandler: tokenHandler,
    },
  };
  console.log(
    "SignUpContext data values contains: " +
      JSON.stringify(signUpContextValue.data)
  );
  return (
    <SignupContext.Provider value={signUpContextValue}>
      {props.children}
    </SignupContext.Provider>
  );
};

export default SignupContext;
