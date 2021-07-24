import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import SelectRoom from "./pages/SelectRoom";
import RoomChat from "./pages/RoomChat";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={SelectRoom} />
        <Route path="/chat" component={RoomChat} />
      </Router>
    </>
  );
}

export default App;
