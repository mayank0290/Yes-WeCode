import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Yes WeCode</h1>
        <p>© 2024 www.yeswc.com. All rights reserved.</p>
      </div>
      
      <div>
        <h5>Follow US!</h5>
        <div>
            <Link href="">Instagram</Link>
            <Link href="">Facebook</Link>
            <Link href="">GitHub</Link>
            <Link href="">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
