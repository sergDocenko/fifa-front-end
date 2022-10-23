import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Initial } from "./screens/components/Initial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
