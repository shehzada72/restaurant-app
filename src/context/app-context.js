import React from 'react';
import {MainState} from './models/main';

export default React.createContext({
    ...MainState,
    handleUpdateMainState: object => {}
});
