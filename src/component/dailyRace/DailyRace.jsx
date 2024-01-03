import styles from "./DailyRace.module.scss";

const tableData = [
  {
    game: "Arsenal (Alicia) - Chelsea (July)",
    time: "00:23",
    amount: "0.46278200",
    multiplier: "0.46278200",
    payout: "0.46278200",
    status: styles.success,
    key: "tb-1",
  },
  {
    game: "Arsenal (Alicia) - Chelsea (July)",
    time: "00:23",
    amount: "0.46278200",
    multiplier: "0.46278200",
    payout: "0.46278200",
    status: styles.success,
    key: "tb-2",
  },
  {
    game: "Arsenal (Alicia) - Chelsea (July)",
    time: "00:23",
    amount: "0.46278200",
    multiplier: "0.46278200",
    payout: "0.46278200",
    status: styles.fail,
    key: "tb-3",
  },
  {
    game: "Arsenal (Alicia) - Chelsea (July)",
    time: "00:23",
    amount: "0.46278200",
    multiplier: "0.46278200",
    payout: "0.46278200",
    status: styles.success,
    key: "tb-4",
  },
];

const DailyRace = () => {
  return (
    <div className={styles.dailyRaceContainer}>
      <div className={styles.header}>
        <span>Daily Roulette Race</span>
        <div className={styles.rightItem}>
          <span>Ends in 5h 23 min 11 sec</span>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <tr>
            <th style={{ textAlign: "left" }}>Game</th>
            <th>Time</th>
            <th>Bet Amount</th>
            <th>Multiplier</th>
            <th style={{ textAlign: "right" }}>Payout</th>
          </tr>
          <tbody>
            {tableData.map((item) => {
              return (
                <tr key={item.key} className={styles.dailyRaceRow}>
                  <td style={{ textAlign: "left" }}>{item.game}</td>
                  <td>{item.time}</td>
                  <td>{item.amount}</td>
                  <td>{item.multiplier}</td>
                  <td className={item.status} style={{ textAlign: "right" }}>
                    {item.payout}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyRace;
