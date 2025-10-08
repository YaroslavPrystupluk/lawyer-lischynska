import logoFull from "/image/logo.webp";
import {
    COMMON_ROUTES_NAME,
    // COMMON_ROUTES_NAME_SUBMENU,
} from "../../constants/constants.ts";
import {NavLink} from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    const baseLink =
        "inline-block px-2 py-2 lg:text-base text-sm font-semibold uppercase transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 rounded";
    const activeLink =
        "text-slate-100 border-b-2 border-primary";
    const inactiveLink =
        "text-slate-900 hover:text-slate-100 hover:border-b-2 hover:border-primary";

    return (
        <footer className="bg-primary text-slate-900">
            <div className="container mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
                {/* Верхній блок: логотип + навігація */}
                <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-start">
                    {/* Логотип */}
                    <div className="flex md:block justify-center">
                        <NavLink to="/" className="flex items-center">
                            <img
                                src={logoFull}
                                alt="Логотип"
                                className="block w-[180px] sm:w-[200px] invert sepia brightness-200"
                            />
                        </NavLink>
                    </div>

                    {/* Навігація */}
                    <nav aria-label="Footer" className="w-full place-self-center">

                        <ul className="flex flex-wrap justify-center md:justify-center gap-x-6 gap-y-2">
                            {COMMON_ROUTES_NAME.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.to}
                                        className={({isActive}) =>
                                            `${baseLink} ${isActive ? activeLink : inactiveLink}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs sm:text-sm text-slate-900 text-center sm:text-left">
            © {year} Адвокатське бюро "Тетяни Ліщинської"™. Всі права захищені.
          </span>

                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                        {/* Facebook */}

                        <a
                            href="https://www.facebook.com/profile.php?id=61579070290567"
                            className="text-slate-900 hover:text-slate-100 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.483v-9.294H9.692v-3.622h3.117V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.505 0-1.797.716-1.797 1.766v2.316h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/advocate_lishchynska_tetiana/"
                            className="text-slate-900 hover:text-slate-100 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <svg
                                className="w-7 h-7 sm:w-8 sm:h-8"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                            >
                                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                                <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:tanya_lischynska@ukr.net"
                            className="text-slate-900 hover:text-slate-100 transition-colors text-sm sm:text-base"
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


{/*<ul className="text-slate-900 font-medium">*/
}
{/*  {COMMON_ROUTES_NAME_SUBMENU[0]?.submenu.map((item) => (*/
}
{/*    <li className="mb-4" key={item.id}>*/
}
{/*      <NavLink*/
}
{/*        to={item.to}*/
}
{/*        className={({ isActive }) =>*/
}
{/*          isActive*/
}
{/*            ? "text-slate-100 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase border-primary border-b-2 border-solid"*/
}
{/*            : "text-black/70 px-2 py-2 lg:text-base sm:text-sm font-semibold uppercase hover:border-primary hover:border-b-2 hover:border-solid hover:text-slate-100"*/
}
{/*        }*/
}
{/*      >*/
}
{/*        {item.name}*/
}
{/*      </NavLink>*/
}
{/*    </li>*/
}
{/*  ))}*/
}
{/*</ul>*/
}
{/*  </div>*/
}
{/*</div>*/
}
