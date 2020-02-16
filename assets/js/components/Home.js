import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Welcome from './Welcome';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/welcome"}> Dos nos Twerk Kids </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Switch>
                   <Redirect exact from="/" to="/welcome" />
                   <Route path="/users" component={Users} />
                   <Route path="/posts" component={Posts} />
                   <Route path="/welcome" component={Welcome} />
                   <Route render={() => (<div> Désolé, cette page n'éxiste pas. </div>)} />
               </Switch>
           </div>
        )
    }
}
    
export default Home;