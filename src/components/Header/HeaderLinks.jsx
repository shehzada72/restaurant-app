/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";


// core components
import CustomDropdown from "./../CustomDropdown/CustomDropdown";
import Button from '@material-ui/core/Button';

import headerLinksStyle from "./../../assets/jss/material-kit-react/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Components"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            Home
                        </Link>,
                        <a
                            href="https://www.shehzadaslam.com"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            About Dev
                        </a>
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://www.shehzadaslam.com"
                    color="inherit"
                    target="_blank"
                    className={classes.navLink}
                >
                    <CloudDownload className={classes.icons} /> Download
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        href="https://twitter.com/PkShehzada"
                        target="_blank"
                        color="inherit"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow me on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="inherit"
                        href="https://www.facebook.com/shehzada.se"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow me on linkedInn"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="inherit"
                        href="https://www.linkedin.com/in/shehzada-se"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-linkedin"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
