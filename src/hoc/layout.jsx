import React from 'react';
import Header from "../components/Header/Header";
import {APP_NAME} from "../utils/globals";
import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "../components/Footer/Footer";

const Layout = ({
                    children,
                    colorProps
                }) => {
    return (
        <div>
            <Header
                brand={APP_NAME}
                rightLinks={<HeaderLinks />}
                fixed
                color={colorProps ? colorProps.color : 'white'}
                changeColorOnScroll={colorProps ? colorProps.onScroll : {
                    height: 400,
                    color: 'white'
                }}
            />
            {children}

            <Footer />
        </div>
    );
};

export default Layout;
