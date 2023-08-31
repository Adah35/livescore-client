import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import NewsSection from "./pages/NewsPage";
import AdminPage from "./pages/admin/AdminPage";
import MatchPage from "./pages/match/MatchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsSection />} />
        <Route path="match" element={<MatchPage />} />
      </Route>

      <Route path="/footballtic/private/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
