import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools';


@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    const {store} = this.props
    return (
      <div className="App">
      < DevTools />
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>

        {store.list.map(i => <Item item={i} store={store} />)} 
      </div>
    );
  }
}

export default App;
