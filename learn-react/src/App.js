import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

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

function AnotherPage() {
  return (

    <PDFViewer src="./The Art and Science of Prompting.pdf" />

  );
}



function PDFViewer({ src }) {
  return (
    <Box width="100%" height="600px">
      <embed src={src} type="application/pdf" width="100%" height="100%" />
    </Box>
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