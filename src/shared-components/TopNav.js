import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import leftNav from '../shared-components/leftNav'
const TopNav=()=>{
    return(
        <div>
        <nav class = "navbar bg-dark">
        <button type="button" class="btn btn-link">Blogs</button>
        <button type="button" class="btn btn-link">Favourite Content</button>
        <button type="button" class="btn btn-link">Settings</button>
        </nav>
        <Route path="/Top/Left" component={leftNav}/>
        </div>
    );

}
export default TopNav;