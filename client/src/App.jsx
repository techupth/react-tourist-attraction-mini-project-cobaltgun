import "./App.css";
import WhereToTravel from "./components/elements";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhereToTravel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
