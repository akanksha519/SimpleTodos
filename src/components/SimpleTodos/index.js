import {Component} from 'react'
import TodoItem from './components/TodoItem'

import './index.css'

const initialTodosList = [
  {
    uniqueNo: 1,
    id: 1,
    title: 'Book the ticket for today evening',
  },
  { 
    uniqueNo: 2,
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    uniqueNo: 3,
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    uniqueNo: 4,
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    uniqueNo: 5,
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    uniqueNo: 6,
    id: 6,
    title: 'Fix the production issue',
  },
  {
    uniqueNo: 7,
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    uniqueNo: 8,
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    searchInput: '',
    TodosList: initialTodosList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteTodo = uniqueNo => {
    const {TodosList} = this.state
    const filteredUsersData = TodosList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      TodosList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, TodosList} = this.state
    const searchResults = TodosList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Simple Todos</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />

        <ul className="list-container">
          {searchResults.map(eachTodo => (
            <TodoItem
              todoItemDetails={eachTodo}
              key={eachTodo.uniqueNo}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
