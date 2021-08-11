import React from 'react';
import { Route } from 'react-router';
import HomeScreen from '../screens/home.screen';

const ReactRouter =() =>{ 
    return(
        <React.Fragment>
            <Route exact path ="/" component = {HomeScreen}/>
            <Route path ="/404" component = {HomeScreen}/>
            <Route path ="/500" component = {HomeScreen}/>
        </React.Fragment>
    )
}

export default ReactRouter;