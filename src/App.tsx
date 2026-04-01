import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import DSA from "./pages/DSA";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Landing */}
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/topic/:id"
              element={
                <Layout>
                  <Topic />
                </Layout>
              }
            />

            <Route
              path="/dsa"
              element={
                <Layout>
                  <DSA />
                </Layout>
              }
            />

            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/topic/:id"
              element={
                <Layout>
                  <Topic />
                </Layout>
              }
            />

            <Route
              path="/dsa"
              element={
                <Layout>
                  <DSA />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
