/* eslint-disable react/prop-types */
import Navbar from "../component/navbar/Navbar";
import Sidebar from "../component/sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <div className="wrapper">
      <main>
        <Navbar />
        <div className="game-board-container">{props.children}</div>
      </main>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
};

export default MainLayout;
