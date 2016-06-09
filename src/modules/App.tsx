
import * as React from "react";
import NavLink from './NavLink'
import Home from './Home'

export default class App extends React.Component<any, any> {

    
    render() {
        return (
            <div>
                <h1>Ghettohub Issues</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>

                {this.props.children || <Home/>}
                
            </div>
        )
    }
}
