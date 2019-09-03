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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Card from "./../../../components/Card/Card";
import CardHeader from "./../../../components/Card/CardHeader";
import CardBody from "./../../../components/Card/CardBody";
import loginStyle from "./../../../assets/jss/material-kit-react/views/componentsSections/loginStyle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import AppContext from './../../../context/app-context';
import FoodItem from "../../../components/widgets/FoodItem";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const SectionSearch = ({classes}) => {

    const context = React.useContext(AppContext);
    const {location:  {cities, city}} = context;

    const handleChange = ({target: {name, value}}) => {
        context.handleUpdateMainState(({location}) => ({location: {...location, [name]: value}}));
    };

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Order Now</h4>
                    </CardHeader>
                    <CardBody>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Location</InputLabel>
                            <Select
                                value={city}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'city',
                                    id: 'age-simple',
                                }}
                            >
                                {cities && (
                                    cities.map(({id, country}) => (
                                        <MenuItem key={id} value={id}>{country}</MenuItem>
                                    ))
                                )}

                            </Select>
                        </FormControl>
                    </CardBody>
                </Card>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <FoodItem classes={classes}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <FoodItem classes={classes}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <FoodItem classes={classes}/>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};

export default withStyles(loginStyle)(SectionSearch);
