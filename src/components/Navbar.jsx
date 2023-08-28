import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Martian Bitcoin</h1>
      </Link>
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/presale">Presale</Link>
        </li>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />
        )}
      </div>

      <div
        className={
          nav
            ? "md:hidden w-full h-screen left-0 top-0 absolute flex flex-col justify-center items-center text-center bg-black -z-10 ease-in-out duration-500"
            : "md:hidden absolute left-[-100%]"
        }
      >
        <ul>
          <li className="py-4">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="py-4">
            <Link to="/presale" className="link">
              Presale
            </Link>
          </li>
          <li className="py-4">
            <Link to="/buy" className="link">
              Buy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
