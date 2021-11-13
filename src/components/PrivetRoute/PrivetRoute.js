import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const PrivetRoute = ({children, ...rest}) => {
    const { user, isLoading } = useFirebase();
    if (isLoading) {
        return <div class="spinner-border text-primary" role="status">
                       <span class="visually-hidden">Loading...</span>
           
              </div> 
        }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;