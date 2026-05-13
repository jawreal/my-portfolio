import Main from "@/layouts/Main";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  useDarkMode();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App;