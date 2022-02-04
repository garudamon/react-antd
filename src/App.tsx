import { useEffect } from "react";
import "assets/styles/styles.css";
import "antd/dist/antd.css";
import { HomePage } from "pages";

const App = () => {
  useEffect(() => {
    document.title = "JITERA – Coding Assignment";
  }, []);

  return <HomePage />;
};

export default App;
