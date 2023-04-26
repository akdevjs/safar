import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center text-xl py-8 px-12 text-[#000B69]">
      {/* Right Logo */}
      <div>
        <h1 className="font-extrabold">LOGO</h1>
      </div>
      {/* Navigation Buttons */}
      <nav className="md:w-full md:ml-36">
        <ul className="flex gap-10">
          <li>
            <a>Home</a>
          </li>
          <li className="list-disc">
            <a>Booking</a>
          </li>
          <li className="list-disc">
            <a>Contact us</a>
          </li>
          <li className="list-disc">
            <a>About</a>
          </li>
        </ul>
      </nav>
      {/* Left Menu */}
      <div className="flex gap-4 md:w-full justify-end text-black">
        <button className="px-10 py-4 text-sm rounded-r-full rounded-l-full  bg-white">
          Log in
        </button>
        <button className="px-10 rounded-r-full rounded-l-full py-4 text-sm bg-[#5855EB]">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
