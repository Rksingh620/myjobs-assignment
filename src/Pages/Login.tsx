import Button from "../Components/Button";
import Input from "../Components/Input";
import useAuth from "../utils/hooks/useAuth";

type Props = {};

const Login = (props: Props) => {
  const {
    login,
    isLogging,
    email,
    password,
    handleChange,
    emailError,
    passwordError,
  } = useAuth();
  return (
    <div className="flex mt-16 justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="mx-3 md:mx-0 lg:w-2/5 w-full min-h-[50vh] bg-white p-4 rounded-xl shadow-xl flex flex-col"
      >
        <h2 className="text-2xl font-semibold">Login</h2>
        <Input
          type="email"
          value={email}
          onChange={(v) => handleChange("email", v)}
          label="Email address"
          placeholder="Enter your email"
          className="my-3"
          errorMessage={emailError}
          // required
        />
        <Input
          type="password"
          value={password}
          onChange={(v) => handleChange("password", v)}
          label="Password"
          placeholder="Enter your password"
          errorMessage={passwordError}
          // required
        />
        <Button
          label="Login"
          type="submit"
          radius="md"
          loadingLabel={isLogging ? "Logging in" : undefined}
          className="px-10 bg-blue text-white font-semibold mt-6 mx-auto rounded"
        />
      </form>
    </div>
  );
};

export default Login;
