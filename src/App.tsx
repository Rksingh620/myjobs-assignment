import axios from "axios";
import { useContext, useMemo } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar";
import { AuthContext } from "./utils/context/AuthContext";
import RootRoute from "./utils/Routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { token, isLoggedIn, onLogout, user } = useContext(AuthContext);
  const location = useLocation();

  // axios.defaults.baseURL = "https://jobs-api.squareboat.info/api/v1/";
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.request.use(
    (config) => {
      if (config.headers && !config?.url?.includes("Auth") && token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      console.log("Something went wrong with request", error);
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(undefined, (err) => {
    if (err.response) {
      console.error("Error Response:", err.response);
    }
    if (err?.response?.status === 401) {
      // toast.error(err?.response?.data?.message);
      setTimeout(() => {
        if (user) {
          onLogout();
        }
      }, 3000);
    }
    return Promise.reject(err);
  });
  const darkBgHeight = useMemo(() => {
    let path = location?.pathname;
    return path === "/"
      ? "h-[58vh]"
      : path === "/login"
      ? "h-[40vh]"
      : "h-[30vh]";
  }, [location]);
  return (
    <div className="min-h-screen relative">
      <NavBar />
      <div className="absolute top-0  h-full w-full -z-10">
        <div
          className={`${darkBgHeight} bg-gradient-to-tr from-dark to-dark/90 `}
        ></div>
        <div className="bg-primary h-full"></div>
      </div>
      <div className=" md:px-40 px-8 ">
        <RootRoute />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="mt-12"
        closeOnClick
        pauseOnFocusLoss
        draggable={false}
      />
    </div>
  );
}

export default App;
