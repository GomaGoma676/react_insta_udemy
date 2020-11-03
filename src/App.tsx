import React from "react";

import styles from "./App.module.css";
import Core from "./features/core/Core";

function App() {
  return (
    <div className={styles.app}>
      <Core />
    </div>
  );
}

export default App;
