import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { About, Profile } from "./navigation/routes";
import SpeedoMeter from "./pages/charts/speedo-meter";
import Home from "./pages/home";
import UserDetail from "./pages/user/detail";
import UserList from "./pages/user/list";

export interface AppPage {}
const App: React.FunctionComponent<AppPage> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="about">
            <Route index element={<About />} />
            <Route path=":aboutID" element={<About />} />
          </Route>

          <Route path="/profile" element={<Profile />} />

          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserDetail />} />
          </Route>

          <Route path="/speedometer" element={<SpeedoMeter />} />

          <Route path="*" element={<h1>The page was not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
