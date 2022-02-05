import { useEffect } from "react";
import "assets/styles/styles.css";
import "antd/dist/antd.css";
import { HomePage } from "pages";

const DOC_TITLE = "JITERA – Coding Assignment";

const App = () => {
  useEffect(() => {
    document.title = DOC_TITLE;
  }, []);

  return <HomePage />;
};

export { DOC_TITLE };

export default App;
