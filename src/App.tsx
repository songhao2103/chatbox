import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ElementType } from "react";
import { Fragment } from "react/jsx-runtime";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoutes from "./components/layouts/PrivateLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container-chatbox">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: ElementType = Fragment;

            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {/* private */}

          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: ElementType = Fragment;

            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <PrivateRoutes>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRoutes>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
