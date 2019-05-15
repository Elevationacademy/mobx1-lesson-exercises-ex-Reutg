import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (itemName) => {
       let item = this.list.find(i => i.name === itemName)
       item.completed = true
    }
    
    @action addItem = (itemName) => {
        this.list.push(new Item(itemName))
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(i=> i.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (itemName) => {
        let itemIndex = this.list.findIndex(i => i.name === itemName)
        this.list.splice(itemIndex, 1)
    }
}

