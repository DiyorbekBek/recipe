import { useRef } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const displayName = useRef();
  const photoUrl = useRef();
  const email = useRef();
  const password = useRef();
  const { signUpWithGoogleProvider, signup } = useSignup();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      photoUrl.current.value,
      email.current.value,
      password.current.value, 
    );
  };

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          Signup
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input
              ref={displayName}
              type="text"
              placeholder="Name..."
              className="input-bordered input-sm w-full max-w-xs rounded-md md:input-md"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">photoURL:</span>
            </div>
            <input
              ref={photoUrl}
              type="url"
              placeholder="PhotoURL..."
              className="input-bordered input-sm w-full max-w-xs rounded-md md:input-md"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              ref={email}
              type="email"
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
            <button className="btn btn-secondary btn-sm md:btn-md">
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
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

export default Signup;
