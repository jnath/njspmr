import React from 'react'
import { Link } from 'react-router'

export default class NavLink extends React.Component<any, any> {
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
}
