import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
      this.props.store.checkItem(this.props.item.name)
      }
      editItem = () => {
        let newLocation = prompt("Enter new location")
        this.props.store.editItem(this.props.item.name, newLocation)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item.name)
      }
    render() {
        return (
            <div className = {this.props.item.completed ? "crossed" : null}>
            <input type="checkbox" value={this.props.item.name} onClick={this.checkItem} />
            {this.props.item.name} - {this.props.item.location}

            <button className="editButton" onClick={this.editItem}>Edit</button>
            <button className="deleteButton" onClick={this.deleteItem}>Delete</button>
            </div>)
    }
}

export default Item