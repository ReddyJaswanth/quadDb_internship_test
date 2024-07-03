import React from "react";

function Footer() {
  return (
    <>
      {/* Top section of the footer */}
      <div className="flex align-middle justify-between mt-10 mx-10 p-2 text-gray-500 border-t-2 border-gray-400">
        <p>Copyright © 2019 HodlInfo.com</p>
        <p>Support</p>
      </div>

      {/* Bottom section of the footer */}
      <div className="flex justify-center align-middle p-2">
        <button className="p-2 border-2 border-primary-color rounded-md text-primary-color">
          Add hodlinfo to home screen
        </button>
      </div>
    </>
  );
}

export default Footer;
