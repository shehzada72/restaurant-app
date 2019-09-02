/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Card from "./../../../components/Card/Card";
import CardHeader from "./../../../components/Card/CardHeader";
import CardBody from "./../../../components/Card/CardBody";

import loginStyle from "./../../../assets/jss/material-kit-react/views/componentsSections/loginStyle";
import IntegrationReactSelect from "../../../components/CustomInput/Select";

class SectionSearch extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Order Now</h4>

                  </CardHeader>
                  <CardBody>
                  <IntegrationReactSelect/>
                  </CardBody>
                </form>
              </Card>
        </div>
      </div>
    );
  }
}

SectionSearch.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginStyle)(SectionSearch);
