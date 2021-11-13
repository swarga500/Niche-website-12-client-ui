import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/UseFirebase/UseFirebase';

const AdminRoute = ({children, ...rest}) => {
    const { user, admin, isLoading } = useFirebase();
    if (isLoading) {
         return <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
            
               </div> 
         }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;