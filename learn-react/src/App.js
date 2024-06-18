import React from "react";
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

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

      <div style={{ width: '40%', padding: '20px' }}>
        <SimpleGrid columns={1} spacing={10}>
          {editedOrders.map((order, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size='md'>{order.itemName}</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Description
                    </Heading>
                    <Input
                      value={order.description}
                      onChange={(event) => handleDescriptionChange(index, event)}
                    />
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Comment
                    </Heading>
                    <Input
                      value={order.comment}
                      onChange={(event) => handleCommentChange(index, event)}
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}



function Orders({ orders }) {
  return (
    <div>
      {orders.map((order, index) => (
        <Card key={index}>
          <CardHeader>
            <Heading size='md'>{order.title}</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {order.summary}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {order.overview}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {order.analysis}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      ))}

    </div>
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