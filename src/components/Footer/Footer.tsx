import logoFull from "/image/logo.webp";
import {
  COMMON_ROUTES_NAME,
  COMMON_ROUTES_NAME_SUBMENU,
} from "../../constants/constants.ts";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img
                src={logoFull}
                alt="logo"
                className="block w-[200px] invert sepia brightness-200"
              />
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <ul className="text-slate-700 dark:text-slate-600 font-medium">
              {COMMON_ROUTES_NAME.map((item) => (
                <li className="mb-4" key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-100 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase border-primary border-b-2 border-solid"
                        : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-slate-100"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="text-slate-700 dark:text-slate-600 font-medium">
              {COMMON_ROUTES_NAME_SUBMENU[0]?.submenu.map((item) => (
                <li className="mb-4" key={item.id}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-100 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase border-primary border-b-2 border-solid"
                        : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-slate-100"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-700 sm:text-center dark:text-slate-600">
            © {year} Адвокатське бюро "Тетяни Ліщинської"™ . Всі права захищені.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/advocate_lishchynska_tetiana/"
              className="text-slate-700 hover:text-slate-900 ms-5"
              target="_blanc"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
              </svg>
              <span className="sr-only">Instagram community</span>
            </a>
            <a
              href="mailto:tanya_lischynska@ukr.net"
              className="text-slate-700 hover:text-slate-900 ms-5 flex justify-center items-center"
            >
              tanya_lischynska@ukr.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
