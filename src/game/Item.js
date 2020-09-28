import React, { Component } from 'react'
import './Judgment.css'
import { connect } from 'react-redux'

class Item extends Component {
    render() {
        let d = this.props.value.date
        let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        return (
            <div class="listItem">
                <p>{this.props.value.judgment}</p>
                <p>{f}</p>
            </div>
        )
    }
}
export default connect()(Item)