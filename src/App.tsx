import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import DSA from "./pages/DSA";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Home />} />

          {/* React Topics */}
          <Route path="/topic/:id" element={<Topic />} />

          {/* DSA */}
          <Route path="/dsa" element={<DSA />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
