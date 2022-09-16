import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TypeLoginResponse } from "../types";

type Props = {};

type TypeAuthContext = {
  isLoggedIn: boolean;
  token: string;
  onLogin: (user: TypeLoginResponse) => void;
  onLogout: () => void;
  user?: TypeLoginResponse;
};

export const AuthContext = React.createContext<TypeAuthContext>({
  isLoggedIn: false,
  token: "",
  onLogin: () => {},
  onLogout: () => {},
  user: undefined,
});

const AuthContextProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<TypeLoginResponse>();
  const navigate = useNavigate();
  const onLogin = (user: TypeLoginResponse) => {
    setIsLoggedIn(true);
    sessionStorage.setItem("token", user?.token);
    sessionStorage.setItem("user", JSON.stringify(user));
    setToken(user?.token);
    setUser(user);
    navigate("/home");
  };
  const onLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setToken("");
    toast.info("You have successfully logged out");
  };
  useEffect(() => {
    const user = JSON.parse(
      sessionStorage.getItem("user") || "{}"
    ) as TypeLoginResponse;
    if (user?.token) {
      onLogin(user);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
