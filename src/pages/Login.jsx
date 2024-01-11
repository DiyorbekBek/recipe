import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Buttons from "../components/Buttons";

function Login() {
  const { signUpWithGoogleProvider } = useSignup();
  const { login } = useLogin();
  const email = useRef();
  const password = useRef();
  const { isPanding } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };

  return (
    <div className="grid h-screen place-items-center bg-slate-400">
      <div>
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              ref={email}
              type="text"
              placeholder="Email..."
              className="input-bordered input-sm w-full max-w-xs rounded-md md:input-md"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              ref={password}
              type="password"
              placeholder="Password..."
              className="input-bordered input-sm w-full max-w-xs rounded-md md:input-md"
            />
          </label>
          <div className="flex flex-col gap-4">
            {!isPanding && <Buttons text={"Login"} disabled={false} />}
            {isPanding && (
              <Buttons
                text={<span className="loading loading-dots loading-lg"></span>}
                disabled={true}
              />
            )}
            <button
              type="button"
              onClick={signUpWithGoogleProvider}
              className="btn btn-info btn-sm md:btn-md"
            >
              Google
            </button>
            <a href="/signup" className="btn btn-accent btn-sm md:btn-md">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
