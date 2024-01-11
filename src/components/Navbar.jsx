import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Navbar() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout siccess :)");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  const { user } = useGlobalContext();
  return (
    <div
      data-theme=""
      className="max-container flex flex-col items-center bg-base-100  py-4 shadow-md md:flex-row md:justify-between"
    >
      <Link to="/" className="text-xs font-bold md:text-2xl">
        My Kitchen
      </Link>
      <div className="flex flex-col items-center gap-1 md:flex-row">
        <p>Welcome {user.displayName}</p>
        <div className="avatar">
          <div className="mask mask-hexagon w-10 md:w-12 ">
            <img src={user.photoURL} />
          </div>
        </div>
        <button onClick={logout} className="btn btn-primary btn-sm md:btn-md">
          Logout
        </button>
        <Link className="btn btn-primary btn-sm md:btn-md" to="/create">
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
