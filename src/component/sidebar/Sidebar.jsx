import { MenuItemListBottom, MenuItemListTop } from "../../constant";
import MenuItem from "./MenuItem";
import styles from "./Sidebar.module.scss";
import Icon1 from "../../assets/twitter.svg";
import Icon2 from "../../assets/tinder.svg";
import Icon3 from "../../assets/icon2.svg";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        {MenuItemListTop.map((item) => (
          <MenuItem key={item.key} imgSrc={item.imgSrc} name={item.name} />
        ))}
      </div>
      <div className={styles.devider}>
        <hr />
      </div>
      <div className={styles.bottomMenu}>
        {MenuItemListBottom.map((item) => (
          <MenuItem key={item.key} imgSrc={item.imgSrc} name={item.name} />
        ))}
      </div>
      <div className={styles.sidebarFooter}>
        <img src={Icon1} alt="social media icon" />
        <img src={Icon2} alt="social media icon" />
        <img src={Icon3} alt="social media icon" />
      </div>
    </div>
  );
};

export default Sidebar;
