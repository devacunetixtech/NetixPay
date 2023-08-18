import './App.css'
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from 'react';
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

/**root routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage></HomePage>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/profile',
    element : <Profile></Profile>
  },
  {
    path : '/dashboard',
    element : <Dashboard></Dashboard>
  },
  {
    path : '*',
    element : <PageNotFound></PageNotFound>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
export default App;