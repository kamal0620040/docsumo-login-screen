import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Login } from "./pages"
import { ProtectedRoute } from "./components"
import React from "react";

class App extends React.Component {
  render(){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
