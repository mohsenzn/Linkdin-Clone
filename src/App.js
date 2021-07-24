import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/Userslice";
import Login from "./Components/Login/Login";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
