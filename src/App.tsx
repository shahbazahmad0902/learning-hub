import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import DSA from "./pages/DSA";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;