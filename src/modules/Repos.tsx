import React from 'react'
import NavLink from './NavLink'


export default class Repos extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2>Repos</h2>

                {/* add some links */}
                <ul>
                <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                </ul>
                {this.props.children}

            </div>
      );
    }
}
