import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import { Center } from "@chakra-ui/react"

import UserContextProvider from "./components/UserContextProvider"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Center height="100vh">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Center>
    </BrowserRouter>
  )
}

export default App