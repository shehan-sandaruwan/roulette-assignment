import styles from "./Winners.module.scss";
import Coins from "../../assets/coins.svg";
import { winnersList } from "../../constant";
import Avatar from "../../assets/Ellipse 1.svg";

const WinnersTable = () => {
  return (
    <div className={styles.winnerstableContainer}>
      <table>
        <tr>
          <th style={{ textAlign: "left" }}>17 Bets Total</th>
          <th style={{ textAlign: "right" }} className={styles.tableHRight}>
            <img src={Coins} alt="coins stack" /> <span>139.10</span>
          </th>
        </tr>
        <tbody>
          {winnersList.map((item) => {
            return (
              <tr key={item.key}>
                <td
                  className={styles.leftTableData}
                  style={{ textAlign: "left" }}
                >
                  <img src={Avatar} alt="winner avatar" />
                  <span>{item.name}</span>
                </td>
                <td style={{ textAlign: "right" }}>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WinnersTable;
