import React, {useState} from "react";
import Navbar from "./Navbar"
import MainPage from "./Main"

function App1() {
    const [user, setUser] = useState({ name: "Steve" });
    return (
      <div>
        <Navbar />
        <MainPage user={user} />
      </div>
    );
  }

export default App1;