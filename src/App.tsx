import Layout from "@/layouts/Layout";
import Main from "@/layouts/Main";
import PreviewProject from "@/pages/PreviewProject";
import { useDarkMode } from "@/hooks/useDarkMode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  useDarkMode();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="preview/:id" element={<PreviewProject/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;