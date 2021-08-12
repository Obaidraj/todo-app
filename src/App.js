import { useEffect } from "react";
import "./App.css";
import Modal from "./Modal";
import Todo from "./Todo";
function App() {
  useEffect(() => {
    <Modal />;
  }, []);
  return (
    <div className="App">
      <Modal />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
