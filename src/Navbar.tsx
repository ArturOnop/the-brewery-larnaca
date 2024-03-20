const Navbar = () => {
  return (
    <div className="absolute top-0 w-screen z-50">
      <div className="navbar bg-[#f7f7f7] text-blue-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-xl font-bold">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center flex flex-col gap-0">
          <div>
            <a href="#home" className="normal-case w-full h-full">
              <img
                className="w-16"
                src="../public/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="hidden lg:flex font-bold">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#home">Home</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#menu">Menu</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#about">About Us</a>
              </li>
              <li>
                <a className="hover:bg-transparent hover:text-red-600"
                   href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end pr-2">
          <a href="#footer" className="block md:hidden hover:bg-transparent hover:text-red-600">
            <img src="../public/food.png" className="w-8 h-8"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;