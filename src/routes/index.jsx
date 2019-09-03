import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import appRoutes from './routes';
import {MainState} from "../context/models/main";
import AppContext from '../context/app-context';
import {BASE_API_URL} from "../utils/globals";
import {api} from "../utils/request";

class Index extends Component {
    state = MainState;

    componentDidMount() {
        this.fetchCities();
    }

    fetchCities = () => {
        api(`${BASE_API_URL}/cities`, 'GET')
            .then(res => {
                this.handleUpdateMainState(({location}) => ({location: {...location, cities: res.data}}));
            })
    };

    handleUpdateMainState = cb => {
        if (typeof cb === 'function') {
            this.setState(cb)
        } else {
            this.setState({...cb})
        }
    };

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
