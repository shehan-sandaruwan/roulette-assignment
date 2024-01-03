import styles from "./BetAmountInput.module.scss";
import Coins from "../../assets/coins.svg";
import Line from "../../assets/Frame 38.svg";
import { betInputActionList } from "../../constant";

const BetAmountInput = () => {
  return (
    <div className={styles.betInputContainer}>
      <img src={Coins} alt="coin stack" />
      <input placeholder="Enter bet amount..." type="number" />
      <img src={Line} alt="verticle line" />
      <div className={styles.betActionList}>
        {betInputActionList.map((item) => {
          return <span key={item.key}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default BetAmountInput;
