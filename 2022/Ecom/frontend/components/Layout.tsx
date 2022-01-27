import React, { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Navbar from './Navbar';
type ParentComponent = {
    childcomponent?: ReactNode
}
function Layout(props: ParentComponent) {
    return <div>
        <Navbar />
        {props.childcomponent}
        <Footer />
    </div>;
}

export default Layout;
