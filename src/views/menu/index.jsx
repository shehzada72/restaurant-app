import React from 'react';
import {AppContext} from "../../utils/global-exports";
import Layout from "../../hoc/layout";
import Parallax from "../../components/Parallax/Parallax";
import classNames from "classnames";
import {profilePageStyles} from "../../assets/jss";
import withStyles from "@material-ui/core/styles/withStyles";
import {withRouter} from 'react-router-dom';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {api} from "../../utils/request";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {foodItemImage} from "../../assets/images";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "../../components/CustomButtons/Button";

const MenuIndex = ({classes}) => {
    const context = React.useContext(AppContext);
    const {restaurant} = context;

    React.useEffect(() => {
        if (Object.keys(context.restaurant).length === 0) {
            api(`/restaurants/100227`, 'GET')
                .then(({data}) => {
                    context.handleUpdateMainState({restaurant: data})
                });
        }
    }, [context]);

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Layout>
            <Parallax small filter image={restaurant.logo} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>

                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={8} lg={9}>
                                {restaurant.categories && (
                                    restaurant.categories.map(category => (
                                        <ExpansionPanel key={category.id}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className={classes.heading}>{category.name_en}</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <List className={classes.root}>
                                                    {category.items && (
                                                        category.items.map(item => (
                                                            <React.Fragment key={item.id}>
                                                                <ListItem alignItems="flex-start">
                                                                    <ListItemAvatar>
                                                                        <Avatar alt="Remy Sharp" src={foodItemImage} />
                                                                    </ListItemAvatar>
                                                                    <ListItemText
                                                                        primary={item.name_en}
                                                                        secondary={
                                                                            <React.Fragment>
                                                                                <Typography
                                                                                    component="span"
                                                                                    variant="body2"
                                                                                    className={classes.inline}
                                                                                    color="textPrimary"
                                                                                >
                                                                                    Ali Connors
                                                                                </Typography>
                                                                                {` ${item.desc_en}`}
                                                                            </React.Fragment>
                                                                        }
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <AddCircleRoundedIcon
                                                                            color={'primary'}
                                                                            edge="end"
                                                                            onChange={() => {}}
                                                                            checked={true}
                                                                            inputProps={{ 'aria-labelledby': item.id }}
                                                                        />
                                                                    </ListItemSecondaryAction>

                                                                </ListItem>
                                                                <Divider variant="inset" component="li" />
                                                            </React.Fragment>
                                                        ))
                                                    )}

                                                </List>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))
                                )}
                            </GridItem>
                            <GridItem xs={12} sm={12} md={8} lg={3}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            be
                                            {bull}
                                            nev
                                            {bull}o{bull}
                                            lent
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>

                </div>
            </div>

        </Layout>
    );
};

export default withRouter(withStyles(profilePageStyles)(MenuIndex));
