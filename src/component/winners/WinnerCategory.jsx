/* eslint-disable react/prop-types */
import styles from "./Winners.module.scss";
import Coin1 from "../../assets/Coin 3.svg";
import Coin2 from "../../assets/Coin 4.svg";
import Coin3 from "../../assets/Coin 5.svg";
import WinnersTable from "./WinnersTable";

const Winnercategory = ({ type }) => {
  return (
    <div className={styles.winnersWrapper}>
      <div className={styles.categoryContainer}>
        <div className={styles.leftItems}>
          <img src={type === "14" ? Coin1 : type === "2" ? Coin2 : Coin3} />
          <span>Place Bet</span>
        </div>
        <div className={styles.rightItems}>{`WIN ${type}X`}</div>
      </div>
      <WinnersTable />
    </div>
  );
};

export default Winnercategory;
