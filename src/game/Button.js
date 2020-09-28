import React, { Component } from 'react'
import { connect } from 'react-redux'
import { maruAction } from "./Store"
import { batuAction } from "./Store"

class Button extends Component {

    table = [['', '', ''], ['', '', ''], ['', '', '']]
    ckickCount = 0

    checkAction = (mark) => {
        this.ckickCount = 0
        this.table = [['', '', ''], ['', '', ''], ['', '', '']]
        setTimeout(function () {
            document.querySelectorAll('#panel_grid button').forEach((value) => { value.textContent = '' })
            if (mark === 8) {//引き分け動作
                alert('引き分け')

            } else {//勝敗動作
                alert(mark + 'の勝ち')
            }
        }, 500)

    }


    check(table) {
        console.log('table', table)

        if (table[0][0] === true && table[0][1] === true && table[0][2] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))

        } else if (table[1][0] === true && table[1][1] === true && table[1][2] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[2][0] === true && table[2][1] === true && table[2][2] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][0] === true && table[1][0] === true && table[2][0] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][1] === true && table[1][1] === true && table[2][1] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][2] === true && table[1][2] === true && table[2][2] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][0] === true && table[1][1] === true && table[2][2] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][2] === true && table[1][1] === true && table[2][0] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][2] === true && table[1][1] === true && table[2][0] === true) {
            this.checkAction('●')
            this.props.dispatch(maruAction('●'))


        } else if (table[0][0] === false && table[0][1] === false && table[0][2] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[1][0] === false && table[1][1] === false && table[1][2] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[2][0] === false && table[2][1] === false && table[2][2] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][0] === false && table[1][0] === false && table[2][0] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][1] === false && table[1][1] === false && table[2][1] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][2] === false && table[1][2] === false && table[2][2] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][0] === false && table[1][1] === false && table[2][2] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][2] === false && table[1][1] === false && table[2][0] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


        } else if (table[0][2] === false && table[1][1] === false && table[2][0] === false) {
            this.checkAction('×')
            this.props.dispatch(batuAction('×'))


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

        console.log(this.ckickCount)
        if (this.ckickCount === 8) {//引き分け判断
            this.checkAction(this.ckickCount)

        } else if (targetTextContent === '') {
            this.ckickCount++
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
                {(() => {
                    let list = []
                    let listnum = 0
                    let itemnum = 0
                    for (let i = 0; i < 9; i++) {
                        list.push(<button onClick={this.doClick} data-listnum={listnum} data-itemnum={itemnum}>{
                            // this.state.turn ? '●' : '×'
                        }
                        </button>)
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

export default connect()(Button)