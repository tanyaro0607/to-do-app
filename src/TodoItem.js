import React, {useContext} from 'react'
import {Context} from './context'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  const cls = ['todo']

  //если checked = true
  if (completed) {
    cls.push('completed') //то в массив классов доб. класс completed
  }
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}