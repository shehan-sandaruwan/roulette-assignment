import styles from "./Sidebar.module.scss";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ imgSrc, name }) => {
  return (
    <div className={styles.menuItemContainer}>
      <img src={imgSrc} alt="menu item icon" />
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;
