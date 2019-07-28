import React, { Component } from 'react'

import HeadBar from './HeadBar';

export default class TitleBar extends Component {
    render() {
        return (
            <div className="jumbotron">
                <HeadBar />
            </div>
        )
    }
}
