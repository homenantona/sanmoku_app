import React, { Component } from 'react'
// import {connect} from 'react-redux'
import './App.css'
import Panel from './game/Panel'
import Judgment from './game/Judgment'


class App extends Component {
  render() {
    return (
      <div class="flex_set">
        <section class="panelSec">
          <Panel />
        </section>
        <section class="judgmentSec">
          <Judgment />
        </section>
      </div>
    )
  }
}

export default App