import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <p>Homee</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
