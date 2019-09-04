import React from 'react';
import Layout from "../../hoc/layout";
import withStyles from "@material-ui/core/styles/withStyles";
import basicsStyle from "./../../assets/jss/material-kit-react/views/componentsSections/basicsStyle";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import FoodItem from "../../components/widgets/FoodItem";
import {AppContext} from "../../utils/global-exports";
import {api} from "../../utils/request";

const RestaurantIndex = ({classes}) => {
    const context = React.useContext(AppContext);
    let {restaurants} = context;

    React.useEffect(() => {
        if (context.restaurants.length <= 0) {
            api(`/restaurants-by-city/13`, 'GET')
                .then(({data: {restaurants}}) => {
                    context.handleUpdateMainState({restaurants})
                });
        }
    }, [context]);

    return (
        <Layout>
            <div className={classes.sections}>
                <div className={classes.container}>
                    <GridContainer>
                        {restaurants && (
                            restaurants.map(restaurant => (
                                <GridItem key={restaurant.id} xs={12} sm={12} md={3}>
                                    <FoodItem restaurant={restaurant}/>
                                </GridItem>
                            ))
                        )}
                    </GridContainer>
                </div>
            </div>
        </Layout>
    );
};

export default withStyles(basicsStyle)(RestaurantIndex);
