import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return <Box px={'2'} py={'4'} >
        <Divider border={'2px'} />
        <Box align={'center'} p={'4'}>
            <Text fontWeight={'thin'}>All copy rights reserved</Text>
        </Box>
        <Divider border={'2px'} />
    </Box>;
}

export default Footer;
