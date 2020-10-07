import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import MovieDetails from '../MovieModule/MovieDetails'
import MovieList from '../MovieModule/MovieList'


const Public = () =>(
    
        <Switch>
             <Route exact path="/Movie-Information/">
                <Redirect to={`/Movie-list`}></Redirect>
            </Route>
            <Route exact path="/Movie-list">
                <MovieList />
            </Route>
            <Route exact path="/Movie-detail">
                <MovieDetails />
            </Route>
            </Switch>
    
)

export default Public