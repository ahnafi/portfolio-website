function Nav() {
  // navbar fixed
  window.onscroll = function () {
    const header = document.querySelector("header");
    const navBrand = document.querySelector("#nav-brand");
    const fixNav = header.offsetTop;
    if (window.pageYOffset > fixNav) {
      header.classList.add("navbar-fixed");
      navBrand.classList.add("py-5");
      navBrand.classList.remove("py-3");
    } else {
      header.classList.remove("navbar-fixed");
      navBrand.classList.add("py-3");
      navBrand.classList.remove("py-5");
    }
  };
  // hamburger
  function hamburger() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("hidden");
    // console.log(navMenu)
  }

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-200 ease-in-out">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-6">
            <a
              href="#home"
              id="nav-brand"
              className="py-3 font-mono transition-all font-bold text-2xl text-white hover:text-dark block"
            >
              SULTHON
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4  lg:hidden "
              onClick={() => hamburger()}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <nav
              id="nav-menu"
              className=" duration-300 ease-in-out hidden absolute py-4 bg-pages border-slate-300 border opacity-100 shadow-lg rounded-lg max-w-[250px] w-full right-0 top-full mt-1 transition lg:border-none lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none "
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="font-semibold text-white py-2 mx-8 flex group-hover:text-slate-200"
                  >
                    home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="font-semibold text-white py-2 mx-8 flex group-hover:text-slate-200"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skills"
                    className="font-semibold text-white py-2 mx-8 flex group-hover:text-slate-200"
                  >
                    Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="font-semibold text-white py-2 mx-8 flex group-hover:text-slate-200"
                  >
                    Portfolio
                  </a>
                </li>
                {/* <li className="group">
                  <a
                    href="#contact"
                    className="font-semibold text-white py-2 mx-8 flex group-hover:text-slate-200"
                  >
                    contact
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
