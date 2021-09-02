// Write your code here
import './index.css'

const Todo = props => {
  const {todoElement, onDeleteTodo} = props
  const {id, title} = todoElement

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-element">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default Todo
