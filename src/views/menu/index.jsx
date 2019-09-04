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

const MenuIndex = ({classes, history}) => {
    const context = React.useContext(AppContext);
    const {restaurant} = context;

    React.useEffect(() => {
        if (Object.keys(restaurant).length === 0) {
            history.goBack()
        }
    }, [restaurant, history]);

    return (
        <Layout>
            <Parallax small filter image={restaurant.logo} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default withRouter(withStyles(profilePageStyles)(MenuIndex));
