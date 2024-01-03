import styles from "./Gameboard.module.scss";
import Sound from "../../assets/Volume_Max.svg";
import Coins from "../../assets/Coin 20.svg";
import CoinsSmall from "../../assets/Coin 12.svg";
import BetAmountInput from "../betAmount/BetAmountInput";
import Winnercategory from "../winners/WinnerCategory";
import Timer from "../timer/Timer";
import { useState } from "react";
import DailyRace from "../dailyRace/DailyRace";

const Gameboard = () => {
  const [animStart, setAnimStart] = useState(false);

  const coinsArray = new Array(50);
  coinsArray.fill(1);
  const smallCoinsArray = new Array(10);
  smallCoinsArray.fill(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Roulette</span>
        <div className={styles.sounds}>
          <img src={Sound} alt="speaker icon" />
          <span>Sound on</span>
        </div>
      </div>
      <div className={styles.coinsContainer}>
        <Timer setAnimStart={setAnimStart} />
        <div
          className={`${styles.coins} moving-coins ${
            animStart ? "active" : ""
          }`}
        >
          {coinsArray.map((item, index) => {
            return <img src={Coins} alt="coins" key={index} />;
          })}
          <div className={styles.gradientOverlay}></div>
        </div>
      </div>
      <div className={styles.previouse}>
        <div className={styles.smallCoins}>
          <span>Previous rolls</span>
          {smallCoinsArray.map((item, index) => {
            return <img src={CoinsSmall} alt="coins" key={index} />;
          })}
          <div className={styles.gradientOverlaySmallCoins}></div>
        </div>
        <span>Last 100</span>
        <div className={styles.lastStats}>
          <ul>
            <li>40</li>
            <li>4</li>
            <li>50</li>
          </ul>
        </div>
      </div>
      <BetAmountInput />
      <div className={styles.winnersDetails}>
        <Winnercategory type="2" />
        <Winnercategory type="14" />
        <Winnercategory type="2" />
      </div>
    </div>
  );
};

export default Gameboard;
