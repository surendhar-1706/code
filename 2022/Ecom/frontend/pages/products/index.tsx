import React, { ReactNode } from 'react';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
type ParentComponent = {
    childcomponent?: ReactNode
}
function ProductIndex(props: ParentComponent) {
    return <div>
        {/* <Layout childcomponent='hi is passed as a string' /> */}
    </div>

        ;
}

export default ProductIndex;
