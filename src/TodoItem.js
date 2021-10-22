import React, {useState} from 'react'

export default function TodoItem({title, id, completed}) {
  const [checked, setChecked] = useState(completed)

  const cls = ['todo']

  //если checked = true
  if (checked) {
    cls.push('completed') //то в массив классов доб. класс completed
  }
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}