// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteUser} = props
  const {title, uniqueNo} = todoItemDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p className="user-designation"> {title} </p>

        <button className="delete-button" onClick={onDelete}></button>
      </div>
    </li>
  )
}

export default TodoItem
