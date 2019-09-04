import React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import clsx from "clsx";
import {
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography, withStyles,
    Chip
} from '@material-ui/core';

import foodItemStyles from "./../../../assets/jss/material-kit-react/widgets/foodItem";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {navigate} from "../../../routes/methods";
import {withRouter} from 'react-router-dom';
import {AppContext} from "../../../utils/global-exports";

const FoodItem = ({classes, restaurant={}, history}) => {
    const context = React.useContext(AppContext);
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const handleNavigateToMenu = () => {
        context.handleUpdateMainState({restaurant});
        navigate(history, `/restaurants/${restaurant.id}`)
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                onClick={handleNavigateToMenu}
                className={classes.media}
                image={restaurant.logo}
                title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="subtitle2" color="primary" component="p">
                    {restaurant.name_en}
                </Typography>
                <Typography noWrap variant="body2" color="textSecondary" component="p">
                    {restaurant.address_en}
                </Typography>

                {restaurant.tags && (
                    restaurant.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            variant={'outlined'}
                            size={'small'}
                            color={'primary'}
                            label={tag.name_en}
                        />
                    ))
                )}

                {restaurant.kashruts && (
                    restaurant.kashruts.map((tag, index) => (
                        <Chip
                            key={index}
                            variant={'outlined'}
                            size={'small'}
                            avatar={<Avatar src={tag.image} />}
                            label={tag.name_en}
                        />
                    ))
                )}

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant={'subtitle2'}>Address:</Typography>
                    <Typography paragraph>
                        {restaurant.address_en}
                    </Typography>
                    <Typography variant={'subtitle2'}>Description:</Typography>
                    <Typography variant={'body2'}>
                        {restaurant.description_en}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default withRouter(withStyles(foodItemStyles)(FoodItem));
