import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400">
              BRAND NAME
            </a>
          </Link>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
              onClick={handleClick}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? "flex" : "hidden"
            } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
        >
          <Link href="/">
            <a className="text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
              Home page
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform hover:text-indigo-400">
              About us
            </a>
          </Link>
          <div className="dropdown inline-block relative text-center">
            <button className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400 inline-flex items-center">
              <span className="mr-1">News</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu sm:absolute hidden md:text-center md:w-48 sm:text-center text-gray-700 pt-1 group-hover:block ">
              <li>
                <a href="/posts/1" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  News Category 1
                </a>
              </li>
              <li>
                <a href="/posts/2" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  News Category 2
                </a>
              </li>
              <li>
                <a href="/posts/3" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  News Category 3
                </a>
              </li>
              <li>
                <a href="/posts/4" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  News Category 4
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown inline-block relative text-center">
            <button className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400 inline-flex items-center">
              <span className="mr-1">Categories</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="dropdown-menu sm:absolute hidden md:text-center md:w-48 sm:text-center text-gray-700 pt-1 group-hover:block ">
              <li>
                <a href="/products/1" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  Category 1
                </a>
              </li>
              <li>
                <a href="/products/2" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  Category 2
                </a>
              </li>
              <li>
                <a href="/products/3" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  Category 3
                </a>
              </li>
              <li>
                <a href="/products/4" className="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap">
                  Category 4
                </a>
              </li>
            </ul>
          </div>
          <Link href="/contact">
            <a className="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400">
              Contact us
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
