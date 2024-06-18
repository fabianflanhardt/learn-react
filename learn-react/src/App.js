import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { useState } from "react";

const orders = [
  {
    orderNumber: 1,
    itemName: "Item 1",
    description: "Description for Item 1",
    comment: "Comment for Item 1"
  },
  {
    orderNumber: 2,
    itemName: "Item 2",
    description: "Description for Item 2",
    comment: "Comment for Item 2"
  },
  {
    orderNumber: 3,
    itemName: "Item 3",
    description: "Description for Item 3",
    comment: "Comment for Item 3"
  }
];


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
  const [editedOrders, setEditedOrders] = useState(orders);

  const handleDescriptionChange = (index, event) => {
    const updatedOrders = [...editedOrders];
    updatedOrders[index].description = event.target.value;
    setEditedOrders(updatedOrders);
  };

  const handleCommentChange = (index, event) => {
    const updatedOrders = [...editedOrders];
    updatedOrders[index].comment = event.target.value;
    setEditedOrders(updatedOrders);
  };

  return (
    <div className="App-body">
      <div style={{ width: '60%' }}>
        <PDFViewer src="./The Art and Science of Prompting.pdf" />
      </div>
      <div style={{ width: '40%' }}>
        <Accordion allowToggle>
          {editedOrders.map((order, index) => (
            <AccordionItem key={order.orderNumber}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {order.itemName}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <table>
                  <tr>
                    <td>Description:</td>
                    <td>
                      <input
                        type="text"
                        value={order.description}
                        onChange={(event) => handleDescriptionChange(index, event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Comment:</td>
                    <td>
                      <input
                        type="text"
                        value={order.comment}
                        onChange={(event) => handleCommentChange(index, event)}
                      />
                    </td>
                  </tr>
                </table>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div >
    </div >
  );
}



function PDFViewer({ src }) {
  return (
    <Box width="100%" height="90vh">
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