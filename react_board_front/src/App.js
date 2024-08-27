import { Route, Routes } from "react-router-dom";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import Main from "./component/common/Main";
import BoardList from "./component/board/BoardList";
import BoardView from "./component/board/BoardView";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<BoardList />} />
          <Route path="/view/:boardNo" element={<BoardView />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
