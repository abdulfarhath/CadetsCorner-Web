import Navbar from "./components/Navbar";
import StudyRoute from "./routes/StudyRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/study' element={<StudyRoute />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
