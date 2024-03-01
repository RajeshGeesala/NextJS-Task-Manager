"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-green-600">
      <div className="flex p-5 justify-around text-white">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to work manager</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ab!
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href="#!" className="text-white">Facebook</a>
            </li>
            <li>
              <a href="#!" className="text-white">YouTube</a>
            </li>
            <li>
              <a href="#!" className="text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
