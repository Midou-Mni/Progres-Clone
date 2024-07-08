import React, { useState } from "react";
import "./App.css";

import Navbar from "./component/navbar";
import NewStudent from "./component/studentComponent/NewStudent";
import Majors from "./component/studentComponent/Majors";

function App() {
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showMajors, setShowMajors] = useState(false);

  return (
    <div className="ALL">
      <Navbar
        showAddStudent={showAddStudent}
        setShowAddStudent={setShowAddStudent}
        showMajors={showMajors}
        setShowMajors={setShowMajors}
      />
      <div className="w-full flex justify-center pb-[10vh]">
        {showAddStudent && <NewStudent />}
        {showMajors && <Majors />}
      </div>
    </div>
  );
}

export default App;
