import React from 'react';
import Navigation from '../../Components/Navigation/Navigation'

const Layout = props => {
    return(
        <React.Fragment>
            <Navigation />
            {props.children}
        </React.Fragment>
        
    )
}

export default Layout;