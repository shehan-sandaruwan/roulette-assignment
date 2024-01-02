import styles from "./Navbar.module.scss";
import Logo from "../../assets/Flipper-logo.svg";
import NavbarMiddleDropdown from "./NavbarMiddleDropdown";
import Search from "../../assets/Search_Magnifying_Glass.svg";
import Messages from "../../assets/Chat_Conversation_Circle.svg";
import Bell from "../../assets/Bell.svg";
import Avatar from "../../assets/Frame 3.svg";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="roulette-logo" />
      </div>
      <NavbarMiddleDropdown />
      <div className={styles.rightContainer}>
        <div className={styles.search}>
          <img src={Search} alt="search icon" />
        </div>
        <div className={styles.message}>
          <img src={Messages} alt="chat icon" />
        </div>
        <div className={styles.notification}>
          <img src={Bell} alt="notification icon" />
        </div>
        <div className={styles.profile}>
          <span>Peter Penn</span>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
