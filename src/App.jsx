import "./App.css";
import DailyRace from "./component/dailyRace/DailyRace";
import Gameboard from "./component/gameboard/Gameboard";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Gameboard />
      <DailyRace />
    </MainLayout>
  );
}

export default App;
