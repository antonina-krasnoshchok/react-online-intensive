//core
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {withProfile} from 'components/HOC/withProfile';

const PrivateRoute = (props) => {
    const { component: Component, isLogged,...rest } = props;
    return (<Route {...rest} render={(props) => (
        isLogged
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>);
};

export default withProfile(PrivateRoute);