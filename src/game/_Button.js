import React, { Component } from 'react'
// import {Connect} from 'react-redux'

class Button extends Component {

    table = [['', '', ''], ['', '', ''], ['', '', '']]


    check(table) {
        console.log('table', table)

        if (table[0][0] === true && table[0][1] === true && table[0][2] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[1][0] === true && table[1][1] === true && table[1][2] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[2][0] === true && table[2][1] === true && table[2][2] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][0] === true && table[1][0] === true && table[2][0] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][1] === true && table[1][1] === true && table[2][1] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][2] === true && table[1][2] === true && table[2][2] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][0] === true && table[1][1] === true && table[2][2] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][2] === true && table[1][1] === true && table[2][0] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][2] === true && table[1][1] === true && table[2][0] === true) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[0][0] === false && table[0][1] === false && table[0][2] === false) {
            setTimeout(function () { alert('●の勝ち') }, 500)
        } else if (table[1][0] === false && table[1][1] === false && table[1][2] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[2][0] === false && table[2][1] === false && table[2][2] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][0] === false && table[1][0] === false && table[2][0] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][1] === false && table[1][1] === false && table[2][1] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][2] === false && table[1][2] === false && table[2][2] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][0] === false && table[1][1] === false && table[2][2] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][2] === false && table[1][1] === false && table[2][0] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        } else if (table[0][2] === false && table[1][1] === false && table[2][0] === false) {
            setTimeout(function () { alert('×の勝ち') }, 500)
        }
    }



    constructor(props) {
        super(props)
        this.state = {
            turn: true
        }
        this.doClick = this.doClick.bind(this)
    }

    doClick(e) {
        let targetTextContent = e.currentTarget.textContent
        let dataListNum = e.currentTarget.getAttribute('data-listnum')
        let dataItemNum = e.currentTarget.getAttribute('data-itemnum')
        if (targetTextContent === '') {
            // stateがtrueなら●、faluseなら×
            e.currentTarget.textContent = this.state.turn ? '●' : '×'
            this.setState({
                turn: this.state.turn ? false : true
            })
            this.table[dataListNum][dataItemNum] = this.state.turn
            console.log('state :' + this.state.turn)
            this.check(this.table)
        } else {
            console.log('二度クリックできません')
        }
    }




    render() {
        return (
            <div>
                {/* {this.table.map(() => (
                    <button onClick={this.doClick} data-listnum="0" data-itemnum="0"></button>
                )
                )} */}
                {(() => {
                    let list = []
                    let listnum = 0
                    let itemnum = 0
                    for (let i = 0; i < 9; i++) {
                    list.push(<button onClick={this.doClick} data-listnum={listnum} data-itemnum={itemnum}>{this.state.turn ? '●' : '×'}</button>)
                        itemnum++
                        if (itemnum === 3) {
                            listnum++
                            itemnum = 0
                        }
                    }
                    return list
                })()
                }
                {/* <button onClick={this.doClick} data-listnum="0" data-itemnum="0"></button>
                <button onClick={this.doClick} data-listnum="0" data-itemnum="1"></button>
                <button onClick={this.doClick} data-listnum="0" data-itemnum="2"></button>
                <button onClick={this.doClick} data-listnum="1" data-itemnum="0"></button>
                <button onClick={this.doClick} data-listnum="1" data-itemnum="1"></button>
                <button onClick={this.doClick} data-listnum="1" data-itemnum="2"></button>
                <button onClick={this.doClick} data-listnum="2" data-itemnum="0"></button>
                <button onClick={this.doClick} data-listnum="2" data-itemnum="1"></button>
                <button onClick={this.doClick} data-listnum="2" data-itemnum="2"></button> */}
            </div>
        )
    }
}

export default Button