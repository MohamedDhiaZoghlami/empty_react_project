import FileUpload from "./pages/FileUpload/FileUpload";
import Home from "./pages/Home/Home";
import RealTime from "./pages/RealTime/RealTime";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/files" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="dzovi">
        <FileUpload />
        <RealTime />
      </div> */}
    </div>
  );
}

export default App;
