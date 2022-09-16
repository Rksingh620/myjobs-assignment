import { TypeLoginResponse } from "./../types";
import { loginUser } from "./../Apis/Api";
import { AuthContext } from "./../context/AuthContext";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const { onLogin } = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const isValidated = () => {
    let isValid = true;
    if (
      email.length === 0 ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email)
    ) {
      isValid = false;
      setEmailError("Please enter a valid email.");
    }
    if (password.length === 0) {
      isValid = false;
      setPasswordError("Password cannot be empty");
    }
    return isValid;
  };
  const handleChange = (type: "email" | "password", value: string) => {
    if (type === "email") {
      setEmail(value);
      setEmailError("");
    } else {
      setPassword(value);
      setPasswordError("");
    }
  };

  const login = async () => {
    try {
      setIsLogging(true);
      const isValid = isValidated();
      if (isValid) {
        const res = await loginUser(email, password);
        // onLogin("token");
        if (res && res?.data) {
          const data: TypeLoginResponse = res?.data.data;
          onLogin(data);
          toast.success("Logged in Successfully!");
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      console.log("cannot login");
    }
    setIsLogging(false);
  };
  return {
    login,
    isLogging,
    email,
    password,
    handleChange,
    emailError,
    passwordError,
  };
};

export default useAuth;
