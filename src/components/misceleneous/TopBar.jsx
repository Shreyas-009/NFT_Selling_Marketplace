import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full h-fit py-4 flex justify-between">
      <div className="flex gap-3 bg-dark_sec rounded-md w-fit py-1 px-2">
        <i className="ri-search-2-line text-zinc-400 text-2xl"></i>
        <input
          className="w-fit outline-none border-none bg-transparent text-zinc-400"
          type="text"
          name=""
          id=""
          placeholder="Search Here"
        />
      </div>
      <div className="flex gap-5 text-xl text-zinc-400 items-center">
        <button>
          <i className="hover:text-dark_btn ri-sun-fill"></i>
        </button>

        <button>
          <i className="hover:text-dark_btn ri-notification-line"></i>
        </button>
        <Link to={"/profile"}>
          <img
            src="https://images.unsplash.com/photo-1716905077190-2bcd4d0b1152?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-7 h-7 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
