import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CustomInput from "../CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Email, People} from "@material-ui/icons";
import CardFooter from "../Card/CardFooter";

import loginStyle from "./../../assets/jss/material-kit-react/views/componentsSections/loginStyle";
import Icon from "@material-ui/core/Icon/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {AppContext} from "../../utils/global-exports";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LoginModal = ({classes}) => {
    const context = React.useContext(AppContext);

    function handleClose() {
        context.handleUpdateMainState({dialogs: {...context.dialogs, login: false}});
    }

    return (
        <div>
            <Dialog
                open={context.dialogs.login}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <Card>
                                    <form className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>Login</h4>
                                            <div className={classes.socialLine}>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i
                                                        className={classes.socialIcons + " fab fa-twitter"}
                                                    />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i
                                                        className={classes.socialIcons + " fab fa-facebook"}
                                                    />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i
                                                        className={
                                                            classes.socialIcons + " fab fa-google-plus-g"
                                                        }
                                                    />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <p className={classes.divider}>Or Be Classical</p>
                                        <CardBody>
                                            <CustomInput
                                                labelText="First Name..."
                                                id="first"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Email..."
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "email",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="pass"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className={classes.inputIconsColor}>
                                                                lock_outline
                                                            </Icon>
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="primary" size="lg">
                                                Get started
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default withStyles(loginStyle)(LoginModal);
