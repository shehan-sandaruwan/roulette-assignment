import { MenuItemListBottom, MenuItemListTop } from "../../constant";
import MenuItem from "./MenuItem";
import styles from "./Sidebar.module.scss";

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
      <div className={styles.sidebarFooter}></div>
    </div>
  );
};

export default Sidebar;
