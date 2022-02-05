import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
type Layouttype = {
    childcomponent?: React.ReactNode
}
function Layout(props: Layouttype) {
    return <Box >
        <Header />
        <Box as={'main'} height={'100vh'}>{props.childcomponent}</Box>
        <Footer />
    </Box>;
}

export default Layout;
