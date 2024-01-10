import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image src='/images/logo.png' height={150} width={150}/></span>
        <p className="text-slate-600 text-lg">All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;