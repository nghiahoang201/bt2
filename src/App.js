import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Page/Home/Home";
import Home2 from "./Component/Page/Home/Home2";
import Abouts from "./Component/Page/About/About";
import Service from "./Component/Page/Service/Service";
import Gallery from "./Component/Page/Gallery/Gallery";
import Teams from "./Component/Page/Teams/Teams";
import Blog from "./Component/Page/Blog/Blog";
import Contact from "./Component/Page/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/home2"
            element={
              <Layout>
                <Home2 />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <Abouts />
              </Layout>
            }
          />
          <Route
            path="/service"
            element={
              <Layout>
                <Service />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/teams"
            element={
              <Layout>
                <Teams />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
