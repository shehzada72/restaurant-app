import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import bgImage from './../../assets/images/bg4.jpg';
import componentsStyle from "./../../assets/jss/material-kit-react/views/components";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";

const Index = ({classes, ...rest}) => {
    return (
        <div>
            <Header
                brand="Material Kit React"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={bgImage}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Material Kit React.</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material-UI Kit based on Material Design.
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
        </div>
    );
};

export default withStyles(componentsStyle)(Index);
