import React, { useState } from 'react';
import { SimpleGrid, Card, CardHeader, CardBody, Heading, Stack, Box, Input, StackDivider } from '@chakra-ui/react';

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

function PDFViewer({ src }) {
    return (
        <Box width="100%" height="90vh">
            <embed src={src} type="application/pdf" width="100%" height="100%" />
        </Box>
    );
}

export default AnotherPage
