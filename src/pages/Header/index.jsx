import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const login = useSelector((state) => state.login);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("You have successfully signed out");

        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  const user = auth?.currentUser?.providerData[0];
  console.log(auth);
  // console.log();
  const handleViewCart = () => {
    navigate("/cart");
  };

  const handleThemeChange = (value) => {
    localStorage.setItem("theme", value);
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);
  let UserFoto = localStorage.getItem("rasm");
  return (
    <>
      <div className="bg-base-200 shadow-[0px_5px_2px_-5px] shadow-[#0000001A]">
        <div className="container">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <Link to="/">
                  <p className="rounded-lg font-[Segoe UI] py-[6px] px-[15px] bg-[#057AFF] text-[25px] font-medium text-[#DBE1FF]">
                    C
                  </p>
                </Link>
              </div>
            </div>
            <div className="navbar-center p-0 flex gap-8">
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/products">
                Products
              </NavLink>
              <NavLink className="link" to="/cart">
                Cart
              </NavLink>
            </div>
            <div className="navbar-end flex gap">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Theme
                  <svg
                    width="12px"
                    height="12px"
                    className="h-2 w-2 fill-current opacity-60 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
                >
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Default"
                      value="default"
                      onChange={() => handleThemeChange("default")}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Retro"
                      value="retro"
                      onChange={() => handleThemeChange("retro")}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Cyberpunk"
                      value="cyberpunk"
                      onChange={() => handleThemeChange("cyberpunk")}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="night"
                      value="night"
                      onChange={() => handleThemeChange("night")}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Valentine"
                      value="valentine"
                      onChange={() => handleThemeChange("valentine")}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Aqua"
                      value="aqua"
                      onChange={() => handleThemeChange("aqua")}
                    />
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle btn-[5px]"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-primary badge-sm indicator-item">
                      {cart.length}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg"></span>
                    <div className="card-actions">
                      <button
                        className="btn btn-primary btn-block btn-sm"
                        onClick={handleViewCart}
                      >
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end ml-3">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Avatar" src={UserFoto} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
