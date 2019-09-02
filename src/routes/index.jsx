import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import appRoutes from './routes';
import {MainState} from "../context/models/main";
import AppContext from '../context/app-context';

class Index extends Component {
    state = MainState;

    componentDidMount() {

    }

    handleUpdateMainState = object => this.setState({...object});

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                handleUpdateMainState: this.handleUpdateMainState,
            }}>
                <BrowserRouter>
                    <Switch>
                        {appRoutes.map((route, key) =>
                            <Route
                                key={key}
                                exact
                                {...route}
                            />
                        )}
                    </Switch>
                </BrowserRouter>
            </AppContext.Provider>
        );
    }
}

export default Index;
