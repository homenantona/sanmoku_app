import React, { Component } from 'react'
// import {connect} from 'react-redux'
import Button from './Button'
import './Panel.css'



class Panel extends Component {

    render() {
        return (
            <div id="panel_grid">
                <Button />
            </div>
        )
    }
}

export default Panel