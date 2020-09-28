import React, { Component } from 'react'
import './Judgment.css'
import Item from './Item'
import { connect } from 'react-redux'

class Judgment extends Component {
    render() {
        // let d = this.props.data[0].date
        // let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        return (
            <div>

                {this.props.data.map((value) => (
                    <Item key={value.judgment} value={value} />
                ))
                }
                {/* <p>{f}</p> */}
            </div>
        )
    }
}
export default connect((state) => state)(Judgment)