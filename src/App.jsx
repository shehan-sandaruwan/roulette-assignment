import "./App.css";
import Gameboard from "./component/gameboard/Gameboard";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Gameboard />
    </MainLayout>
  );
}

export default App;
