import React from "react";
import user_profile from "../../assets/user-profile-img/default-user-pic.jpg";
import { BiSolidCart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiPackageDuotone } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { useStore } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const { isLoggedIn, logoutConfirmationHandler, userDetails, openOrCloseModal } = useStore()

  const navigate = useNavigate()

  return (
    <nav>
      <div className="container" id="navbar">
        <HashLink to="/#" className="logo">
          LOGO
        </HashLink>

        <form className="search-field">
          <input type="text" placeholder="Search for products, brands and more" />
          <button type="submit">
            <CiSearch />
          </button>
        </form>

        <div className="wrapper">
          <button className="cart-btn" onClick={isLoggedIn ? () => navigate("/carts#") : openOrCloseModal}>
            <HashLink>
              <BiSolidCart /> Cart
            </HashLink>
          </button>

          <button className="login-btn">
            {isLoggedIn ? (
              <span>
                <figure className="profile-pic">
                  <img
                    src={userDetails.profilePic ? userDetails.profilePic : user_profile}
                    alt="img"

                  ></img>
                </figure>
                {userDetails.username ? userDetails.username : 'You'}
                <IoIosArrowDown />
                <div className="dropdown">
                  <ul>
                    <li onClick={isLoggedIn ? () => navigate("/profile#") : openOrCloseModal}>
                      <HashLink>
                        <HiOutlineUserCircle /> My Profile
                      </HashLink>
                    </li>
                    <li onClick={isLoggedIn ? () => navigate("/orders#") : openOrCloseModal}>
                      <HashLink>
                        <PiPackageDuotone /> Orders
                      </HashLink>
                    </li>
                    <li onClick={logoutConfirmationHandler}>
                      <HashLink>
                        <RiLogoutCircleRLine /> Logout
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </span>
            ) : (
              <span onClick={openOrCloseModal}>
                <figure className="profile-pic">
                  <img
                    src={user_profile}
                    alt="img"
                  ></img>
                </figure>
                login
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
