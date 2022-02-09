import React from "react";

function Navbar() {
  return (
    <div className="logo">
      <img
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="Netflix-logo"
        height="75px"
        width="180px"
      />
      <img
        src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"
        alt="profile-logo"
        height="50px"
        width="50px"
        className="profile_logo"
      />
    </div>
  );
}

export default Navbar;
