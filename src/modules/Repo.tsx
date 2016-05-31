import React from 'react'

export default class Repo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
}
