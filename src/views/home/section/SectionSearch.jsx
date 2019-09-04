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
import FoodItem from "../../../components/widgets/FoodItem";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {AppContext} from "../../../utils/global-exports";
import {navigate} from "../../../routes/methods";
import {withRouter} from 'react-router-dom';

const SectionSearch = ({classes, history}) => {

    const context = React.useContext(AppContext);
    const {location:  {cities, city}} = context;

    const handleChange = ({target: {name, value}}) => {
        context.handleUpdateMainState(({location}) => ({location: {...location, [name]: value}}));
    };

    const handleOrderNow = () => {
        navigate(history, `restaurants/city/${city}`)
    };

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Card>
                    <CardHeader onClick={handleOrderNow} color="primary" className={classes.cardHeader}>
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
                        <FoodItem/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <FoodItem/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <FoodItem/>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};

export default withRouter(withStyles(loginStyle)(SectionSearch));
