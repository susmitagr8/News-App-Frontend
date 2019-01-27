import React,{Component} from 'react'
const LeftNav=()=>{
    return(
        <nav class = "navbar bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
             <button class="btn btn-link">General News</button>
          </li>
          <li class="nav-item">
             <button class="btn btn-link">Crime News</button>
          </li>
          <li class="nav-item">
             <button class="btn btn-link">Sports News</button>
          </li>
        </ul>
        </nav>
    );

}
export default LeftNav;