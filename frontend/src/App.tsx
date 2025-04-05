import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudyRoute from "./routes/StudyRoute";
import UniformRoute from "./routes/UniformRoute";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/study' element={<StudyRoute />} />
          <Route path='/uniform' element={<UniformRoute/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
