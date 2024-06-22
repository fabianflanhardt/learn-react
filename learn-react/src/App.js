import React from "react";
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AnotherPage from "./views/Order/order";


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Is it now?</p>
        <button>Click me!</button>

      </header>
    </div>
  );
}



function App() {
  return (
    <ChakraProvider>
      <Router>
        <Menu>
          <MenuButton>Menu</MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/another">Another Page</MenuItem>
          </MenuList>
        </Menu>

        <Routes>
          <Route path="/another" element={<AnotherPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;