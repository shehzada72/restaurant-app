import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import bgImage from './../../assets/images/bg4.jpg';
import componentsStyle from "./../../assets/jss/material-kit-react/views/components";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import SectionLogin from "./section/SectionSearch";
import Link from "@material-ui/core/Link";
import Button from "../../components/CustomButtons/Button";
import classNames from "classnames";
import Layout from "../../hoc/layout";

const Index = ({classes}) => {
    return (
        <Layout
            colorProps={{color: 'transparent', onScroll: {height: 400, changeColorTo: 'white'}}}
        >
            <Parallax image={bgImage}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            {/*<div className={classes.brand}>*/}
                                {/*<h1 className={classes.title}>Material Kit React.</h1>*/}
                                {/*<h3 className={classes.subtitle}>*/}
                                    {/*A Badass Material-UI Kit based on Material Design.*/}
                                {/*</h3>*/}
                            {/*</div>*/}
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionLogin />
                <GridItem md={12} className={classes.textCenter}>
                    <Link to={"/login-page"} className={classes.link}>
                        <Button color="primary" size="lg" simple>
                            Start Ordering
                        </Button>
                    </Link>
                </GridItem>
            </div>
        </Layout>
    );
};

export default withStyles(componentsStyle)(Index);
