import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/footer";


export default function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
