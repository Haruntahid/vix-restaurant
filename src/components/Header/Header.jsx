import profile from "/profile.png";

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 my-10 flex justify-between">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Vix Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] text-[#150B2BB3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="flex items-center bg-[#150B2B0D] px-4 py-3 rounded-full">
            <svg
              className="w-4 h-4 mr-2 text-gray-600 text-xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.5-4.5m4.5 4.5l-4.5-4.5m4.5 4.5L23 23M9 17a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-[#150B2B]"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" rounded-full">
                <img alt="Tailwind CSS Navbar component" src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
