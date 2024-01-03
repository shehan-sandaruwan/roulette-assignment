/* eslint-disable react/prop-types */
import Navbar from "../component/navbar/Navbar";
import Sidebar from "../component/sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="page-body-content">
        <aside>
          <Sidebar />
        </aside>
        <div className="game-board-container">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
