import styles from "./Gameboard.module.scss";
import Sound from "../../assets/Volume_Max.svg";
import Coins from "../../assets/Coin 20.svg";

const Gameboard = () => {
  const coinsArray = new Array(20);
  coinsArray.fill(1);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Roulette</span>
        <div className={styles.sounds}>
          <img src={Sound} alt="speaker icon" />
          <span>Sound on</span>
        </div>
      </div>
      <div className={styles.coins}>
        {coinsArray.map((item, index) => {
          return <img src={Coins} alt="coins" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Gameboard;
