import React, { useState } from "react";

export default function Header() {
  const logo = "IgotUMAN"
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>{logo}</div>
        <nav>
          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>
            <li>
              <a href='/'>WORKS</a>
            </li>
            <li>
              <a href='/'>ABOUT ME</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
