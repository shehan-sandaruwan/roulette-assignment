import Solana from "../../assets/solana-sol-logo.svg";
import Frame from "../../assets/Frame.svg";
import styles from "./Navbar.module.scss";

const NavbarMiddleDropdown = () => {
  return (
    <div className={styles.midleContainer}>
      <div className={styles.solanaIcon}>
        <img src={Solana} alt="solana logo" />
      </div>
      <select>
        <option>49.55677717</option>
        <option>49.55677717</option>
      </select>
      <div className={styles.frameicon}>
        <img src={Frame} alt="frame-icon" />
      </div>
    </div>
  );
};

export default NavbarMiddleDropdown;
